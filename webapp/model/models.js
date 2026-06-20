sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        /**
         * Creates a JSON model containing a list of projects with names and descriptions.
         * @returns {sap.ui.model.json.JSONModel} The projects model.
         */
        createProjectsModel: function () {
            var aProjects = [
                { name: "Project A", description: "Description of Project A" },
                { name: "Project B", description: "Description of Project B" },
                { name: "Project C", description: "Description of Project C" }
            ];
            var oModel = new JSONModel(aProjects);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        }
    };

});