sap.ui.controller("twopagesimpleapp.first", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf twopagesimpleapp.first
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf twopagesimpleapp.first
*/
//	onBeforeRendering: function() {
//
//	},
	
	goToSecondPage : function(oEvt){
		
		var oLabel = sap.ui.getCore().byId("idLabel");
		var oInputVal = sap.ui.getCore().byId("idInput").getValue();
		if(oInputVal !== undefined){
			oLabel.setText(oInputVal);
			app.to("idSecond1");
		}
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf twopagesimpleapp.first
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf twopagesimpleapp.first
*/
//	onExit: function() {
//
//	}

});