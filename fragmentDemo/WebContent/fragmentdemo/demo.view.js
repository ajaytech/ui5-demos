sap.ui.jsview("fragmentdemo.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fragmentdemo.demo
	*/ 
	getControllerName : function() {
		return "fragmentdemo.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fragmentdemo.demo
	*/ 
	createContent : function(oController) {
 		
		var oButton =  new sap.m.Button({
			
			text:"Click to open fragment",
			press:[oController.openFragment,oController]
		});
		
		var oPage = new sap.m.Page({
			title: "Fragment example",
			content: [
			          	oButton
			]
		});
		return oPage;
	}

});