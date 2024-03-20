sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.northwind.northwind.controller.Products", {
      /**
       * @override
       */
      onInit: function () {
        const omodel = this.getOwnerComponent().getModel("northwind_json");


        omodel.read("/Products", {
          success: function (data) {
            console.log(data)
          },

          error: (err) => {
            console.log(err, "err");
          },
        });
      },

      onproductitempress: function (event) {
        const item = event.getSource();
        const path = item.getBindingContext("northwind_json").getPath();

        const omodel = this.getOwnerComponent().getModel("northwind_json");
        const data = omodel.getProperty(path);

        const productitemmodel = new JSONModel(data);
        this.getView().setModel(productitemmodel, "productitem");
        productitemmodel.setProperty("/selectedqty", 1);

        productitemmodel.setProperty(
          "/totalprice",
          data.UnitPrice - data.UnitPrice * 0.1
        );

        if (!this.dialog) {
          this.dialog = this.loadFragment({
            name: "com.northwind.northwind.fragments.Purchase",
            id: "purchase-frag",
            type: "XML",
          });
        }

          this.dialog
            .then((dialog) => {
              dialog.open();
            })
            .catch((err) => console.log(err, "error in dialog"));
        


      },
      closedialog:function(){
        this.dialog.then((dialog)=>dialog.close())
      },
      onselectdiscount: function (event) {
        const discount = event.getParameter("selectedItem").getKey();
        const productitemmodel = this.getView().getModel("productitem");
        const data = productitemmodel.getData();
        const totalprice =
          data.UnitPrice * data.selectedqty -
          (data.UnitPrice * data.selectedqty * discount) / 100;
        productitemmodel.setProperty("/totalprice", totalprice);
      },
      navtoq6: function () {
        this.getOwnerComponent().getRouter().navTo("Sales");
      },

    });
  }
);
