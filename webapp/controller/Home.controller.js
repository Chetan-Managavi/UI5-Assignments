sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/xml/XMLModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, XMLModel) {
    "use strict";

    return Controller.extend("com.northwind.northwind.controller.Home", {
      onInit: function () {
        // const omodel = this.getOwnerComponent().getModel("north");
        const omodel = this.getOwnerComponent().getModel("northwind_xml");
        omodel.setHeaders({ Accept: "application/xml" });

        console.log(omodel, "omodel");

        omodel.read("/Products", {
          success: function (data, res) {
            console.log(data, omodel.getProperty("/Products(1)"), "ddd", "ppp");

            //not recomended
            console.log(data.results[0], "not recomended");
          },

          error: (err) => {
            console.log(err, "err");
          },
        });

        // console.log(omodel.getProperty("north>/Products(1)/ProductName"),"myst")

        debugger;
      },

      onVerifyButtonPress: function () {
        const email = this.byId("idemail").getValue();
        const verifystatus = this.byId("idverifystatus");

        const regex = /.+@.+\..+/;
        if (regex.test(email)) {
          verifystatus.setText("Verified");
          verifystatus.addStyleClass("verify");
        } else {
          verifystatus.setText("Invalid Format");
          verifystatus.addStyleClass("notverify");
        }
      },
    });
  }
);
