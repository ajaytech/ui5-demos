sap.ui.jsview("myfirstapp_01.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp_01.demo
	*/ 
	getControllerName : function() {
		console.log("getControllerName");

		return "myfirstapp_01.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp_01.demo
	*/ 
	createContent : function(oController) {
 		var oSimpleInput = new sap.m.Input({
 			
 			placeholder:"Enter Name"
 			
 		}).addStyleClass("inputCss");
 		var oBtn = new sap.m.Button({
 			text:"Submit"
 		}).addStyleClass("btnCss");
 		var oPage = new sap.m.Page({
			title: "Simple App",
			content: [
			          	oSimpleInput,
			          	oBtn          
			]
		});
		console.log("createContent");

 		
 		return oPage;
	}

});