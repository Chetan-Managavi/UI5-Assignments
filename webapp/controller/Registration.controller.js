sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel","sap/base/i18n/Localization"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel,Localization) {
    "use strict";

    return Controller.extend("com.northwind.northwind.controller.Registration", {
      onInit: function () {

        const userdata={
          "name":"",
          "empid":"",
          "designation":"",
          "place":"",
          "dept":""
        }
        const usermodel= new JSONModel(userdata)
        this.getView().setModel(usermodel,"user")
      },
      onSelectLanguage:function(event){

        const key= event.getParameter("selectedItem").getKey()

        console.log(key,"key")

        
        Localization.setLanguage(key);


        

        


      }
    });
  }
);
