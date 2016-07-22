sap.ui.jsview("demofragment.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demofragment.demo
	*/ 
	getControllerName : function() {
		return "demofragment.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demofragment.demo
	*/ 
	createContent : function(oController) {
 		
		var oBtn = new sap.m.Button({
			text:"Open Fragment",
			press:[oController.openFragment,oController]
		});
		
		var oPage= new sap.m.Page({
			title: "Title",
			content: [
			          	oBtn
			]
		});
 		
 		return oPage;
	}

});