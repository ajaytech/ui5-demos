sap.ui.jsview("odata.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf odata.demo
	*/ 
	getControllerName : function() {
		return "odata.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf odata.demo
	*/ 
	createContent : function(oController) {
 		

		// create a oList control
		var oList = new sap.m.List({
			headerText: "Demo oData URL"		    
		});

		// bind the oList items to the oData collection
		oList.bindItems({
			path: "list>/value",
			template: new sap.m.StandardListItem({
				title: "{list>name}",
				description: "{list>kind}"
			}),
			
		});
		var oPage =  new sap.m.Page({
			title: "Demo oData",
			content: [
			          	oList
			]
		});
 		
 		return oPage;
	}

});