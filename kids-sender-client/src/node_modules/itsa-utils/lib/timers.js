/**
 * Collection of various utility functions.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module utils
 * @class Utils
 * @static
*/


"use strict";

var _asynchronizer, _async;

/**
 * Forces a function to be run asynchronously, but as fast as possible. In Node.js
 * this is achieved using `setImmediate` or `process.nextTick`.
 *
 * @method _asynchronizer
 * @param callbackFn {Function} The function to call asynchronously
 * @static
 * @private
**/
_asynchronizer = (typeof setImmediate !== "undefined") ? function (fn) {setImmediate(fn);} :
                    ((typeof process !== "undefined") && process.nextTick) ? process.nextTick : function (fn) {setTimeout(fn, 0);};

/**
 * Invokes the callbackFn once in the next turn of the JavaScript event loop. If the function
 * requires a specific execution context or arguments, wrap it with Function.bind.
 *
 * I.async returns an object with a cancel method.  If the cancel method is
 * called before the callback function, the callback function won"t be called.
 *
 * @method async
 * @param {Function} callbackFn
 * @param [invokeAfterFn=true] {boolean} set to false to prevent the _afterSyncFn to be invoked
 * @return {Object} An object with a cancel method.  If the cancel method is
 * called before the callback function, the callback function won"t be called.
**/
_async = function (callbackFn, invokeAfterFn) {
	var canceled;

	invokeAfterFn = (typeof invokeAfterFn === "boolean") ? invokeAfterFn : true;
	(typeof callbackFn==="function") && _asynchronizer(function () {
		if (!canceled) {
			callbackFn();
		}
	});

	return {
		cancel: function () {
			canceled = true;
		}
	};
};

/**
 * Invokes the callbackFn once in the next turn of the JavaScript event loop. If the function
 * requires a specific execution context or arguments, wrap it with Function.bind.
 *
 * I.async returns an object with a cancel method.  If the cancel method is
 * called before the callback function, the callback function won"t be called.
 *
 * @method async
 * @param {Function} callbackFn
 * @param [invokeAfterFn=true] {boolean} set to false to prevent the _afterSyncFn to be invoked
 * @return {Object} An object with a cancel method.  If the cancel method is
 * called before the callback function, the callback function won"t be called.
**/
module.exports.async = _async;

/**
 * Invokes the callbackFn after a timeout (asynchronous). If the function
 * requires a specific execution context or arguments, wrap it with Function.bind.
 *
 * To invoke the callback function periodic, set "periodic" either "true", or specify a second timeout.
 * If number, then periodic is considered "true" but with a perdiod defined by "periodic",
 * which means: the first timer executes after "timeout" and next timers after "period".
 *
 * I.later returns an object with a cancel method.  If the cancel() method is
 * called before the callback function, the callback function won"t be called.
 *
 * @method later
 * @param callbackFn {Function} the function to execute.
 * @param [timeout] {Number} the number of milliseconds to wait until the callbackFn is executed.
 * when not set, the callback function is invoked once in the next turn of the JavaScript event loop.
 * @param [periodic] {boolean|Number} if true, executes continuously at supplied, if number, then periodic is considered "true" but with a perdiod
 * defined by "periodic", which means: the first timer executes after "timeout" and next timers after "period".
 * The interval executes until canceled.
 * @return {object} a timer object. Call the cancel() method on this object to stop the timer.
*/
module.exports.later = function (callbackFn, timeout, periodic) {
	var canceled = false;
	if (typeof timeout!=="number") {
		return _async(callbackFn);
	}
	var wrapper = function() {
			// nodejs may execute a callback, so in order to preserve
			// the cancel() === no more runny-run, we have to build in an extra conditional
			if (!canceled) {
				callbackFn();
				// we are NOT using setInterval, because that leads to problems when the callback
				// lasts longer than the interval. Instead, we use the interval as inbetween-phase
				// between the separate callbacks.
				id = periodic ? setTimeout(wrapper, (typeof periodic==="number") ? periodic : timeout) : null;
			}
		},
		id;
	(typeof callbackFn==="function") && (id=setTimeout(wrapper, timeout));

	return {
		cancel: function() {
			canceled = true;
			id && clearTimeout(id);
			// break closure:
			id = null;
		}
	};
};