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

var timers = require("../index.js"),
    merge = function (obj1, obj2) {
        obj2.each(function (value, key) {
            if (!(key in obj1)) {
                obj1[key] = obj2[key];
            }
        });
    };

describe("Testing later-method", function () {

    describe("without repeat", function () {
        it("later", function (done) {
            var count = 0;
            timers.later(function() {
                count++;
            }, 100);
            // purposly, check after >2x timeout --> count should only increase 1x
            setTimeout(function() {
                expect(count).to.eql(1);
                done();
            }, 280);
        });
        it("canceled later", function (done) {
            var count = 0;
            var handle = timers.later(function() {
                count++;
            }, 100);
            setTimeout(function() {
                handle.cancel();
            }, 10);
            setTimeout(function() {
                expect(count).to.eql(0);
                done();
            }, 180);
        });
        it("without timeout", function (done) {
            var count = 0,
                countbefore;
            timers.later(function() {
                count++;
            });
            // also check `countbefore` --> in case later doesn"t run asynchronously,
            // count will be 1 at this stage (which has to be 0)
            countbefore = count;
            setTimeout(function() {
                expect(count).to.eql(1);
                expect(countbefore).to.eql(0);
                done();
            }, 80);
        });
        it("canceled without timeout", function (done) {
            var count = 0;
            var handle = timers.later(function() {
                count++;
            });
            handle.cancel();
            setTimeout(function() {
                expect(count).to.eql(0);
                done();
            }, 80);
        });
    });
    describe("repeated", function () {
        it("later repeated every 100ms, check at 50ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, true);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(0);
                done();
            }, 50);
        });
        it("later repeated every 100ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, true);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(2);
                done();
            }, 280);
        });
        it("later repeated every 100ms canceled at 50ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, true);
            setTimeout(function() {
                handle.cancel();
            }, 50);
            setTimeout(function() {
                expect(count).to.eql(0);
                done();
            }, 280);
        });
        it("later repeated every 100ms canceled at 250ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, true);
            setTimeout(function() {
                handle.cancel();
            }, 250);
            setTimeout(function() {
                expect(count).to.eql(2);
                done();
            }, 480);
        });
    });
    describe("repeated with different first interval", function () {
        it("later first 100ms, repeated every 200ms, check at 50ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(0);
                done();
            }, 50);
        });
        it("later first 100ms, repeated every 200ms, check at 150ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(1);
                done();
            }, 150);
        });
        it("later first 100ms, repeated every 200ms, check at 250ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(1);
                done();
            }, 250);
        });
        it("later first 100ms, repeated every 200ms, check at 350ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(2);
                done();
            }, 350);
        });
        it("later first 100ms, repeated every 200ms, check at 450ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(2);
                done();
            }, 450);
        });
        it("later first 100ms, repeated every 200ms, check at 550ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(3);
                done();
            }, 550);
        });
        it("later first 100ms, repeated every 200ms canceled at 50ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
            }, 50);
            setTimeout(function() {
                expect(count).to.eql(0);
                done();
            }, 650);
        });
        it("later first 100ms, repeated every 200ms canceled at 250ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                console.log(count);
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
            }, 250);
            setTimeout(function() {
                expect(count).to.eql(1);
                done();
            }, 650);
        });
        it("later first 100ms, repeated every 200ms canceled at 600ms", function (done) {
            var count = 0,
                handle;
            handle = timers.later(function() {
                count++;
            }, 100, 200);
            setTimeout(function() {
                handle.cancel();
            }, 600);
            setTimeout(function() {
                expect(count).to.eql(3);
                done();
            }, 850);
        });
        it("check context without interval", function (done) {
            var a = {},
                fn = function() {
                    expect(this).to.be.eql(a);
                    done();
                };
            timers.later(fn.bind(a), 0);
        });
        it("check context with interval", function (done) {
            var a = {},
                fn = function() {
                    expect(this).to.be.eql(a);
                },
                handle = timers.later(fn.bind(a), 50, true);
            setTimeout(function() {
                handle.cancel();
                done();
            }, 100);
        });
        it("check going to async", function (done) {
            timers.later(done);
        });
/*
        it("check if _afterAsyncFn is invoked", function (done) {
            var I = {};
            merge(I, timers);
            I._afterAsyncFn = function() {
                done();
            };
            I.later(function() {}, 10);
        });

        it("check if _afterAsyncFn is invoked with true param", function (done) {
            var I = {};
            merge(I, timers);
            I._afterAsyncFn = function() {
                done();
            };
            I.later(function() {}, 10, false, true);
        });

        it("check if _afterAsyncFn is invoked with false param", function (done) {
            var I = {};
            merge(I, timers);
            I._afterAsyncFn = function() {
                done(new Error("_afterAsyncFn got invoked but should not have"));
            };
            I.later(function() {}, 10, false, false);
            setTimeout(done, 80);
        });

        it("check if _afterAsyncFn is invoked with interval", function (done) {
            var I = {},
                handle,
                count = 0;
            merge(I, timers);
            I._afterAsyncFn = function() {
                count++;
            };
            handle = I.later(function() {}, 100, true);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(3);
                done();
            }, 350);
        });

        it("check if _afterAsyncFn is invoked with true param with interval", function (done) {
            var I = {},
                handle,
                count = 0;
            merge(I, timers);
            I._afterAsyncFn = function() {
                count++;
            };
            handle = I.later(function() {}, 100, true, true);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(3);
                done();
            }, 350);
        });

        it("check if _afterAsyncFn is invoked with false param with interval", function (done) {
            var I = {},
                handle,
                count = 0;
            merge(I, timers);
            I._afterAsyncFn = function() {
                count++;
                done(new Error("_afterAsyncFn got invoked but should not have"));
            };
            handle = I.later(function() {}, 100, true, false);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(0);
                done();
            }, 350);
        });

        it("check if _afterAsyncFn is invoked with different interval", function (done) {
            var I = {},
                handle,
                count = 0;
            merge(I, timers);
            I._afterAsyncFn = function() {
                count++;
            };
            handle = I.later(function() {}, 25, 100);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(3);
                done();
            }, 275);
        });

        it("check if _afterAsyncFn is invoked with true param with different interval", function (done) {
            var I = {},
                handle,
                count = 0;
            merge(I, timers);
            I._afterAsyncFn = function() {
                count++;
            };
            handle = I.later(function() {}, 25, 100, true);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(3);
                done();
            }, 275);
        });

        it("check if _afterAsyncFn is invoked with false param with different interval", function (done) {
            var I = {},
                handle,
                count = 0;
            merge(I, timers);
            I._afterAsyncFn = function() {
                count++;
                done(new Error("_afterAsyncFn got invoked but should not have"));
            };
            handle = I.later(function() {}, 25, 100, false);
            setTimeout(function() {
                handle.cancel();
                expect(count).to.eql(0);
                done();
            }, 275);
        });
*/
    });

});
