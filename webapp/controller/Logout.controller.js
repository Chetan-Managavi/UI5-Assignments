sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(
	Controller,
	MessageToast
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.Logout", {

        navtologin:function(){

            const router = this.getOwnerComponent().getRouter()
            router.navTo("Login")

        }

       
	});
});