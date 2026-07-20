sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "Portfolio/model/models"
], function (Controller, models) {
    "use strict";

    return Controller.extend("Portfolio.controller.Header", {
        onInit: function () {
            let oHeaderModel = models.createHeaderContentModel();
            this.getView().setModel(oHeaderModel, "headerContent");
        },

        onLinkedInPress: function () {
            let oHeaderModel = this.getView().getModel("headerContent");
            let sLinkedInUrl = oHeaderModel.getProperty("/linkedin");

            // Ensure the LinkedIn URL is correctly formatted
            if (sLinkedInUrl && !sLinkedInUrl.startsWith("http")) {
                sLinkedInUrl = "https://" + sLinkedInUrl;
            }

            window.open(sLinkedInUrl, "_blank");
        },

        onResumePress: function () {
            let sResumeUrl = "documents/resume.pdf";
            window.open(sResumeUrl, "_blank");
        },

        onBlogInPress: function(){
            let oHeaderModel = this.getView().getModel("headerContent");
            let sblogInUrl = oHeaderModel.getProperty("/blog");
            window.open(sblogInUrl, "_blank");
        },

        onAfterRendering: function () {
            // Shifts focus away from the button to the main layout container
            this.getView().byId("gvMainContainer").focus();
        }

    });
});