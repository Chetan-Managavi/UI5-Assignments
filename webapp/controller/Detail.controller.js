sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.Detail", {

		/**
		 * @override
		 */
		onInit: function() {
			const router=this.getOwnerComponent().getRouter()
			router.getRoute("Detail").attachPatternMatched(this.fnmatched,this)
		
		},
		fnmatched:function(event){

			const path=event.getParameter("arguments").Empid
			console.log("detail path",path)
			this.getView().bindObject({
				path:"/"+path,
				model:"employee"
			})

		}





	});
});