sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "Portfolio/model/models"
], function (Controller, models) {
    "use strict";

    return Controller.extend("Portfolio.controller.Certificates", {
        onInit: function () {
            var oCertificatesModel = models.createCertificatesModel();
            this.getView().setModel(oCertificatesModel, "certificates");
        },

        onViewCertificatePress: function (oEvent) {
            var oButton = oEvent.getSource();
            var sLink = oButton.getBindingContext("certificates").getProperty("link");
            window.open(sLink, "_blank");
        }
    });
});