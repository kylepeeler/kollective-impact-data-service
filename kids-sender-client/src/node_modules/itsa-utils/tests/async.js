/*global describe, it */
/*jshint unused:false */

"use strict";

var expect = require("chai").expect;

Object.prototype.each = function (fn, context) {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            fn.call(context, this[key], key, this);
        }
    }
    return this;
};

var utils = require("../index.js"),
    merge = function (obj1, obj2) {
        obj2.each(function (value, key) {
            if (!(key in obj1)) {
                obj1[key] = obj2[key];
            }
        });
    };

describe("Testing async-method", function () {
    it("went async", function () {
        var count = 0;
        utils.async(function() {
            count++;
        });
        expect(count).to.eql(0);
    });
    it("invoked", function (done) {
        var count = 0;
        utils.async(function() {
            count++;
        });
        setTimeout(function() {
            expect(count).to.eql(1);
            done();
        }, 25);
    });
    it("invoked asap", function (done) {
        var count = 0;
        utils.async(function() {
            count++;
        });
        expect(count).to.eql(0);
        setTimeout(function() {
            expect(count).to.eql(1);
            done();
        }, 5);
    });
    it("canceled async", function (done) {
        var count = 0,
            handle;
        handle = utils.async(function() {
            count++;
        });
        handle.cancel();
        setTimeout(function() {
            expect(count).to.eql(0);
            done();
        }, 25);
    });
    it("check context", function (done) {
        var a = {},
            fn = function() {
                expect(this === a).to.be.true;
                done();
            };
        utils.async(fn.bind(a));
    });
/*
    it("check if _afterAsyncFn is invoked", function (done) {
        var I = {};
        merge(I, utils);
        I._afterAsyncFn = function() {
            done();
        };
        I.async(function() {});
    });

    it("check if _afterAsyncFn is invoked with true param", function (done) {
        var I = {};
        merge(I, utils);
        I._afterAsyncFn = function() {
            done();
        };
        I.async(function() {}, true);
    });

    it("check if _afterAsyncFn is invoked with false param", function (done) {
        var I = {};
        merge(I, utils);
        I._afterAsyncFn = function() {
            done(new Error("_afterAsyncFn got invoked but should not have"));
        };
        I.async(function() {}, false);
        setTimeout(done, 50);
    });
*/
});
