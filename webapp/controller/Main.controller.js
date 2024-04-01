sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.Main", {

        navtohome:function(){

			const router= this.getOwnerComponent().getRouter()
			router.navTo("Home")
            // const splitcont= this.getView().byId("idsplitcont")
            // splitcont.to(this.createId("idProducts"))
                        
        },
		navtoproducts:function(event){
			console.log("navtop")

			const router= this.getOwnerComponent().getRouter()
			const category= event.getSource().data("category")
			console.log(category)




			router.navTo("ProductList",{
				category:category
			})

		},
		navtologout:function(){

			this.getOwnerComponent().getRouter().navTo("Logout")

		}


	});
});