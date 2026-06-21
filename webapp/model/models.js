sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createProjectsModel: function () {
            var aProjects = [
                { name: "Project A", description: "Description of Project A" },
                { name: "Project B", description: "Description of Project B" },
                { name: "Project C", description: "Description of Project C" },
                { name: "Project D", description: "Description of Project D" },
                { name: "Project E", description: "Description of Project E" },
                { name: "Project F", description: "Description of Project F" }
            ];
            var oModel = new JSONModel(aProjects);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createSkillsModel: function () {
            var aSkills = [
                { name: "SAP Cloud Application Programming Model (CAPM)", percentValue: 80 },
                { name: "SAPUI5", percentValue: 60 }
            ];
            var oModel = new JSONModel(aSkills);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        }
    };

});