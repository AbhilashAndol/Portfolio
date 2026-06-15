/*global QUnit*/

sap.ui.define([
	"Portfolio/controller/Portfolio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Portfolio Controller");

	QUnit.test("I should test the Portfolio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
