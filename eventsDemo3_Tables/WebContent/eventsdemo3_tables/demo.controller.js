sap.ui.controller("eventsdemo3_tables.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf eventsdemo2.demo
*/
onInit: function() {

	
	var oPage2 = sap.ui.view({id:"iddemo2", viewName:"eventsdemo3_tables.nextPage", type:sap.ui.core.mvc.ViewType.JS});
	
	app.addPage(oPage2);
	
	// create some dummy JSON oData
	 var oData = {
	            "names": [{
	                id: 1,
	                Name: "Dinosaurs",
	                Place: "Mountain"
	            }, {
	                id: 2,
	                Name: "Elephant",
	                Place: "Forest"
	            }, {
	                id: 3,
	                Name: "Whale",
	                Place: "Sea"
	            }, {
	                id: 4,
	                Name: "Duck",
	                Place: "Water"
	            }, {
	                id: 5,
	                Name: "Monkey",
	                Place: "Tree"
	            }]
	        };
	
	// create a oModel with this oData
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData(oData);
	sap.ui.getCore().setModel(oModel,"table");


	},
	
	
	goToNextPage : function(oEvt){
		
		
		var sVal = oEvt.getParameters().rowBindingContext.getProperty("Name");
		console.log(sVal);
		if(sVal !== undefined){
				sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({
					"data":sVal
				}),"label") ;
		}
		app.to("iddemo2");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf eventsdemo2.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf eventsdemo2.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf eventsdemo2.demo
*/
//	onExit: function() {
//
//	}

});