sap.ui.jsview("eventsdemo3_tables.nextPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventsdemo2.nextPage
	*/ 
	getControllerName : function() {
		return "eventsdemo3_tables.nextPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventsdemo2.nextPage
	*/ 
	createContent : function(oController) {
 		
		var oLabel =  new sap.m.Label({
			text:"{label>/data}"
		});
		
		
		var oPage = new sap.m.Page({
			title: "Second Page",
			showNavButton: true,
            navButtonPress: function() {
                app.back();
            },
			content: [
			          	oLabel
			
			]
		});
 		
 		return oPage;
	}

});