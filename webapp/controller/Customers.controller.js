sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.Customers", {

        /**
         * @override
         */
        onInit: function() {
            
            const omodel = this.getOwnerComponent().getModel("northwind_json");
        console.log(omodel, "omodel");

        omodel.read("/Customers", {
          success: function (data) {
            console.log(data, omodel.getProperty("/Customers(1)"), "ddd", "ppp");
            
          },

          error: (err) => {
            console.log(err, "err");
          },
        });


            
        
        }

	});
});