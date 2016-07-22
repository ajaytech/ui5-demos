sap.ui.jsview("i18ndemo.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf i18ndemo.demo
	*/ 
	getControllerName : function() {
		return "i18ndemo.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf i18ndemo.demo
	*/ 
	createContent : function(oController) {
 		var oBtn = new sap.m.Button({
 			text:"{i18n>greet}"
 		})
		
		var oPage =  new sap.m.Page({
			title: "i18n Example",
			content: [
			          oBtn			
			]
		});
 		return oPage;
	}

});