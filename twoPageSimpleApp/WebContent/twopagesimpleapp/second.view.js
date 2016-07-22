sap.ui.jsview("twopagesimpleapp.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf twopagesimpleapp.second
	*/ 
	getControllerName : function() {
		return "twopagesimpleapp.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf twopagesimpleapp.second
	*/ 
	createContent : function(oController) {
 		var oLabel = new sap.m.Label("idLabel");
		
		var oPage = new sap.m.Page({
			title: "Second Page",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
			          	oLabel
			]
		});
 		return oPage;
	}

});