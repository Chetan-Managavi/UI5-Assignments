sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(
	Controller,
	MessageToast
) {
	"use strict";

	return Controller.extend("com.northwind.northwind.controller.Login", {

        onPasswordInputLiveChange:function(event){

            const password= event.getParameter("value")
            
            var cap_reg=/[A-Z]+/
            var small_reg=/[a-z]+/
            var num_reg=/\d+/
            var spec_reg=/\W+/


            if(!cap_reg.test(password)){

                        event.getSource().setValueState("Error")
                        event.getSource().setValueStateText("Must contain atleast one Capital letter")

            }
           else  if(!small_reg.test(password)){

                        event.getSource().setValueState("Error")
                        event.getSource().setValueStateText("Must contain atleast one Small letter")

            }
            else if(!num_reg.test(password)){

                event.getSource().setValueState("Error")
                event.getSource().setValueStateText("Must contain atleast one Number")

            }
           else  if(!spec_reg.test(password)){

                event.getSource().setValueState("Error")
                event.getSource().setValueStateText("Must contain atleast one Special Character")

            }
          
            else{
                event.getSource().setValueState("Success")
                
            }
        },
        onLoginButtonPress:function(){

            const logindata= this.getOwnerComponent().getModel("user").getData()
            console.log(logindata,"logindata")

            if(logindata.username=="" || logindata.password=="")
            {
                MessageToast.show("Username or Password cannot be empty")
                return
            }

            const router= this.getOwnerComponent().getRouter()
            router.navTo('Main')

        }

	});
});