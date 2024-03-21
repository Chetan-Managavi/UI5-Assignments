sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/xml/XMLModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, XMLModel) {
    "use strict";

    return Controller.extend("com.northwind.northwind.controller.Home", {
      onInit: function () {
        const omodel = this.getOwnerComponent().getModel("northwind_json");

        omodel.read("/Products", {
          success: function (data, res) {
            console.log(data)
          },

          error: (err) => {
            console.log(err, "err");
          },
        });
      },

      onVerifyButtonPress: function () {
        const email = this.byId("idemail").getValue();
        const verifystatus = this.byId("idverifystatus");

        const regex = /.+@.+\..+/;
        if (regex.test(email)) {
          verifystatus.removeStyleClass("notverify");
          verifystatus.addStyleClass("verify");
          verifystatus.setText("Verified");
        } else {
          verifystatus.removeStyleClass("verify");
          verifystatus.addStyleClass("notverify");
          verifystatus.setText("Invalid Format");
        }
      },
      navtoq2: function () {
        this.getOwnerComponent().getRouter().navTo("Customers");
      },
    });
  }
);
