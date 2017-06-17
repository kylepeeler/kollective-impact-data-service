/*global describe, it */
/*jshint unused:false */

"use strict";
var expect = require("chai").expect;

var generator = require("../index.js").idGenerator;

describe("Testing unique generated Id\"s", function () {
    it("first item without namespace --> 1", function () {
        expect(generator()).to.eql(1);
    });
    it("second item without namespace --> 2", function () {
        expect(generator()).to.eql(2);
    });
    it("first item with namespace --> dom-1", function () {
        expect(generator("dom")).to.be.equal("dom-1");
    });
    it("second item with namespace --> dom-2", function () {
        expect(generator("dom")).to.be.equal("dom-2");
    });
    it("third item without namespace and after another namespace --> 3", function () {
        expect(generator()).to.eql(3);
    });
    it("third item with namespace and after another namespace --> dom-3", function () {
        expect(generator("dom")).to.be.equal("dom-3");
    });
    it("item without namespace with start specified --> 1000", function () {
        expect(generator(1000)).to.eql(1000);
    });
    it("item with namespace with start specified --> dom-500", function () {
        expect(generator("dom", 500)).to.be.equal("dom-500");
    });
    it("item without namespace after start specified --> 1001", function () {
        expect(generator()).to.eql(1001);
    });
    it("item with namespace after start specified --> dom-501", function () {
        expect(generator("dom")).to.be.equal("dom-501");
    });
    it("item without namespace with invalid start specified --> 1002", function () {
        expect(generator(700)).to.eql(1002);
    });
    it("item with namespace with invalid start specified --> dom-502", function () {
        expect(generator("dom", 300)).to.be.equal("dom-502");
    });
    it("initial item start specified with namespace --> eventid-200", function () {
        expect(generator("eventid", 200)).to.be.equal("eventid-200");
    });
    it("next item after initial item start specified with namespace --> eventid-201", function () {
        expect(generator("eventid")).to.be.equal("eventid-201");
    });
});
