sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
    JSONModel
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.ProductList", {

        onInit:function(){

            const router= this.getOwnerComponent().getRouter()

            router.getRoute("ProductList").attachPatternMatched(this.fnmatched,this)
        },
        fnmatched:function(event)
        {
            const category = event.getParameter("arguments").category

            const url="https://dummyjson.com/products/category/"+category+"?limit=10"

            fetch(url).then(res => res.json()).then((data)=>{

                const productmodel= new JSONModel(data.products)

                this.getView().setModel(productmodel,"products")


            

            console.log("data",data.products)
            });


        }


	});
});