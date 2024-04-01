/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/northwind/northwind/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent,
	Device,
	models,
	JSONModel) {
        "use strict";

        return UIComponent.extend("com.northwind.northwind.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                const userprofiledata={
                    "username":"",
                    "password":"",
                    
                    "mobilenumber":"",
                    "emailid":"",
                    "address":"",
                    "loggedin":false
            }

            const userprofilemodel=new JSONModel(userprofiledata)

            this.setModel(userprofilemodel,"user")
            

            }
        });
    }
);