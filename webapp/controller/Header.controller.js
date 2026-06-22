sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "Portfolio/model/models"
], function (Controller, models) {
    "use strict";

    return Controller.extend("Portfolio.controller.Header", {
        onInit: function () {
            var oHeaderModel = models.createHeaderContentModel();
            this.getView().setModel(oHeaderModel, "headerContent");
        },

        onLinkedInPress: function () {
            var oHeaderModel = this.getView().getModel("headerContent");
            var sLinkedInUrl = oHeaderModel.getProperty("/linkedin");

            // Ensure the LinkedIn URL is correctly formatted
            if (sLinkedInUrl && !sLinkedInUrl.startsWith("http")) {
                sLinkedInUrl = "https://" + sLinkedInUrl;
            }

            window.open(sLinkedInUrl, "_blank");
        },

        onResumePress: function () {
            var sResumeUrl = "documents/resume.pdf";
            window.open(sResumeUrl, "_blank");
        }

    });
});