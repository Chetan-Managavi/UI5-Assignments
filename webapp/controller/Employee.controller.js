sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  function (Controller, JSONModel,MessageToast,MessageBox) {
    "use strict";

    return Controller.extend("com.northwind.northwind.controller.Employee", {
      /**
       * @override
       */
      
      
      onInit: function () {
       
      },

      navtoq2:function(){

        this.getOwnerComponent().getRouter().navTo("Customers")
      },

     
    });
  }
);
