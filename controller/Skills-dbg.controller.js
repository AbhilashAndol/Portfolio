sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "Portfolio/model/models"
], function (Controller, models) {
    "use strict";

    return Controller.extend("Portfolio.controller.Skills", {
        onInit: function () {
            var oSkillsModel = models.createSkillsModel();
            this.getView().setModel(oSkillsModel, "skills");
        }
    });
});