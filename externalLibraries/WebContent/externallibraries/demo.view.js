sap.ui.jsview("externallibraries.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf externallibraries.demo
	*/ 
	getControllerName : function() {
		return "externallibraries.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf externallibraries.demo
	*/ 
	createContent : function(oController) {
 		
		var oInput =  new sap.m.Input({
						text:"20"
		});
		var oPage =  new sap.m.Page({
			title: "Title",
			content: [
			          	oInput
			]
		});
		return oPage;
	}

});