sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.Sales", {

        /**
         * @override
         */
        onInit: function() {
            // Controller.prototype.onInit.apply(this, arguments);
            const omodel=this.getOwnerComponent().getModel("northwind_json")


            omodel.read("/Sales_by_Categories",{
                success:(data)=> {console.log(data,"data")},
                error: (error)=>{console.log(error)}
            })
        
        }


	});
});