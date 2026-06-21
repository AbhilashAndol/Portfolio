sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "Portfolio/model/models"
], function (Controller, models) {
    "use strict";

    return Controller.extend("Portfolio.controller.Project", {
        onInit: function () {
            var oProjectsModel = models.createProjectsModel();
            this.getView().setModel(oProjectsModel);
        }
    });
});