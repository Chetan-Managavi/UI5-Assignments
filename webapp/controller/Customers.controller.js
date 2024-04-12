sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Button",
    "sap/m/ToolbarSpacer",
    "sap/ui/model/Filter",
  ],
  function (Controller, JSONModel, Button, ToolbarSpacer, Filter) {
    "use strict";

    return Controller.extend("com.northwind.northwind.controller.Customers", {
      /**
       * @override
       */
      onInit: function () {
        
      },
      fnsuccesscustomer: function (data) {
        console.log("length", data.results.length);

        const odata = {
          data: {},
          display_data: {},
          metadata: {},
        };
        const omodel = new JSONModel(odata);

        this.getView().setModel(omodel, "customer");

        const no_of_pages = data.results.length / 5;
        const display_customers = data.results.slice(0, 5);

        omodel.setProperty("/data", data.results);
        omodel.setProperty("/display_data", display_customers);
        omodel.setProperty("/metadata/number_of_pages", no_of_pages);

        const pagination = this.getView().byId("idpagination");

        // pagination.destroyContent()
        var Toolbarspacer = new ToolbarSpacer();

        console.log("pagina", pagination);
        for (var i = 1; i <= no_of_pages; i++) {
          var btn = new Button({
            text: i,
          });
          btn.attachPress(this.onpagebtnpress.bind(this));
          btn.placeAt(pagination);
        }

        Toolbarspacer.placeAt(pagination);
      },
      /**
       * @override
       */
      onBeforeRendering: function () {
        const omodel = this.getOwnerComponent().getModel("northwind_json");

        omodel.read("/Customers", {
          success: this.fnsuccesscustomer.bind(this),

          error: (error) => {
            console.log(error);
          },
        });
      },

      navtoq3: function () {
        this.getOwnerComponent().getRouter().navTo("Invoices");
      },

      onpagebtnpress: function (event) {
        const page_no = parseInt(event.getSource().getText());
        const customers = this.getView()
          .getModel("customer")
          .getProperty("/data");
        const display_customers = customers.slice(page_no * 5 - 5, page_no * 5);

        this.getView()
          .getModel("customer")
          .setProperty("/display_data", display_customers);
        
      },
      onSearchCustomerId: function (event) {
        const pagination = this.getView().byId("idpagination");
        var Toolbarspacer = new ToolbarSpacer();
        pagination.destroyContent();
        Toolbarspacer.placeAt(pagination);
        
        const query = event.getParameter("query");

        const idfilter = new Filter("CustomerID", "Contains", query);
        const omodel = this.getOwnerComponent().getModel("northwind_json");

        omodel.read("/Customers", {
          success: this.fnsuccesscustomer.bind(this),

          error: (error) => {
            console.log("error in filtering", error);
          },

          filters: [idfilter],
        });
      },
    });
  }
);
