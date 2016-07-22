sap.ui.controller("vizdemo.first", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf vizdemo.first
*/
onInit: function() {
	// create some dummy JSON oData
	 var oData = {
	            "names": [{
	                Avg_Weight: 2142,
	                Name: "Dinosaurs",
	                Place: "Mountain"
	            }, {
	            	Avg_Weight: 2891,
	                Name: "Elephant",
	                Place: "Forest"
	            }, {
	            	Avg_Weight: 6870,
	                Name: "Whale",
	                Place: "Sea"
	            }, {
	            	Avg_Weight: 3,
	                Name: "Duck",
	                Place: "Water"
	            }, {
	            	Avg_Weight: 14,
	                Name: "Monkey",
	                Place: "Tree"
	            }]
	        };
	 var o3DData = {
	            "names": [{
	                Avg_Weight: 2142,
	                Name: "Dinosaurs",
	                Place: "Forest"
	            }, {
	            	Avg_Weight: 2891,
	                Name: "Elephant",
	                Place: "Forest"
	            }, {
	            	Avg_Weight: 6870,
	                Name: "Whale",
	                Place: "Water"
	            }, {
	            	Avg_Weight: 3,
	                Name: "Duck",
	                Place: "Water"
	            }, {
	            	Avg_Weight: 14,
	                Name: "Monkey",
	                Place: "Tree"
	            }]
	        };
		// create a oModel with this oData
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(o3DData);
		sap.ui.getCore().setModel(oModel);
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf vizdemo.first
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf vizdemo.first
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf vizdemo.first
*/
//	onExit: function() {
//
//	}

});