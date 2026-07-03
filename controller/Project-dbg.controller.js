sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "Portfolio/model/models",
    "sap/ui/core/Fragment"  // Import the Fragment module
], function (Controller, models, Fragment) {
    "use strict";

    return Controller.extend("Portfolio.controller.Project", {
        onInit: function () {
            var oProjectsModel = models.createProjectsModel();
            this.getView().setModel(oProjectsModel,"projects");
        },

        onProjectInPress: function (oEvent) {
            var oView = this.getView();
            var oButtonContext = oEvent.getSource().getBindingContext("projects");
            // Create the dialog lazily so it doesn't slow down initial app loading
            if (!this._oDialog) {
                Fragment.load({
                    id: oView.getId(),
                    name: "Portfolio.fragments.DetailsDialog", // Path to your fragment file
                    controller: this // Connects this controller's functions to the fragment
                }).then(function (oDialog) {
                    this._oDialog = oDialog;
                    oView.addDependent(this._oDialog); // Connects models & lifecycle to the view
                    // 2. Bind the specific clicked row context directly onto the Dialog box
                    this._oDialog.setBindingContext(oButtonContext, "projects");
                    this._oDialog.open();
                }.bind(this));
            } else {
                // 3. If dialog already exists, re-bind it to the newly clicked row context before popping open
                this._oDialog.setBindingContext(oButtonContext, "projects");
                this._oDialog.open(); // If already loaded before, just pop it open immediately
            }
        },

        // 2. This function triggers when the 'Close' button inside the dialog is pressed
        onCloseDetails: function () {
            if (this._oDialog) {
                this._oDialog.close();
            }
        }
    });
});