sap.ui.jsview("themedesigner.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf themedesigner.demo
	*/ 
	getControllerName : function() {
		return "themedesigner.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf themedesigner.demo
	*/ 
	createContent : function(oController) {
		
		// create a oList control
		var oList = new sap.m.List({
			headerText: "Animals"
		});

		// bind the oList items to the oData collection
		oList.bindItems({
			path: "list>/names",
			template: new sap.m.StandardListItem({
				title: "{list>Name}",
				description: "{list>Place}"
			})
		});
		var oPage = new sap.m.Page({
			title: "Theme change example",
			content: [
			          	oList
			]
		});
		return oPage;
	}

});