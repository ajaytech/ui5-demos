sap.ui.jsview("odatademo.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf odatademo.demo
	*/ 
	getControllerName : function() {
		return "odatademo.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf odatademo.demo
	*/ 
	createContent : function(oController) {
 		
		// create a oList control
		var oList = new sap.m.List({
			headerText: "oData Example"
		});

		// bind the oList items to the oData collection
		oList.bindItems({
			path: "list>/value",
			template: new sap.m.StandardListItem({
				title: "{list>name}",
				description: "{list>kind}"
			})
		});
		var oPage =  new sap.m.Page({
			title: "Title",
			content: [
			          oList
			]
		});
		return oPage;
	}

});