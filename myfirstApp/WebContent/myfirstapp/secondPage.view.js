sap.ui.jsview("myfirstapp.secondPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp.secondPage
	*/ 
	getControllerName : function() {
		return "myfirstapp.secondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp.secondPage
	*/ 
	createContent : function(oController) {
 		
		var  simpleLable =  new sap.m.Label("idLable");
		var page =  new sap.m.Page({
			title: "Second Page",
			showNavButton: true,
			navButtonPress: function(){app.back();},
			content: [
			          	simpleLable
			        
			]
		});
		return page;
	}

});