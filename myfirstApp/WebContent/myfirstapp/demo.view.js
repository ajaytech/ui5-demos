sap.ui.jsview("myfirstapp.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp.demo
	*/ 
	
	getControllerName : function() {
		console.log("getControllerName");
		return "myfirstapp.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp.demo
	*/ 
	createContent : function(oController) {
		console.log("createContent");
		var simpleInput = new sap.m.Input("idInput",{
			 placeholder: "Enter your name"
		});
		var simpleButton = new sap.m.Button("idButton",{
			text: "Submit",
            press: [oController.loginPressed, oController]
		})
		
		var page =  new sap.m.Page({
			title: "Simple App",
			content: [
			          	simpleInput,
			          	simpleButton
			]
		});
		console.log("createContent end");
		return page;
		
	}

});