sap.ui.controller("eventsdemo1.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf eventsdemo1.demo
*/
//	onInit: function() {
//
//	},

	liveChange: function(oEvt){
		
		var sValue = oEvt.getParameter('value');
		sap.m.MessageToast.show(sValue);
	
				
		
	},	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf eventsdemo1.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf eventsdemo1.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf eventsdemo1.demo
*/
//	onExit: function() {
//
//	}

});