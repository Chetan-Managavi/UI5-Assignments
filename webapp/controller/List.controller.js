sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.List", {

        navtodetail:function(event){

            const router= this.getOwnerComponent().getRouter();

            const listitem= event.getSource()
            const path= listitem.getBindingContext("employee").getPath().substr(1)
            console.log("path",path)

            router.navTo("Detail",{
                Empid: path
            })


        }


	});
});