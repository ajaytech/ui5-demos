sap.ui.controller("langinterdemo.langInterDemo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf langinterdemo.langInterDemo
*/
	onInit: function() {
		var localLang = sap.ui.getCore().getConfiguration().getLanguage();
		var i18nPath = "i18n/i18n";
		//Special cases
		if(localLang === "de_DE"){
			i18nPath = i18nPath + "_de.properties";
			
		}else if(localLang === "zh-Hans"){
			i18nPath = i18nPath + "_ch.properties";
		}else{
			i18nPath = i18nPath + "_ch.properties";
		}
		var oi18nModel = new sap.ui.model.resource.ResourceModel({
		       bundleUrl: i18nPath
		});
		
		sap.ui.getCore().setModel(oi18nModel,"i18n");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf langinterdemo.langInterDemo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf langinterdemo.langInterDemo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf langinterdemo.langInterDemo
*/
//	onExit: function() {
//
//	}

});