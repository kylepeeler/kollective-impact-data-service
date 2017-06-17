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


/**
 * Checks whether the environment is Nodejs
 *
 * @method isnode
 * @return {Boolean} whether the environment is Nodejs
 */

'use strict';

var isNode = (typeof global!=='undefined') &&
             ({}.toString.call(global)==='[object global]') &&
             (!global.document || ({}.toString.call(global.document)!=='[object HTMLDocument]'));

module.exports = isNode;
