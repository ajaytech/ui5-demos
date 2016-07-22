sap.ui.jsview("langinterdemo.langInterDemo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf langinterdemo.langInterDemo
	*/ 
	getControllerName : function() {
		return "langinterdemo.langInterDemo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf langinterdemo.langInterDemo
	*/ 
	createContent : function(oController) {
 		
		var oPage = new sap.m.Page({
			title: "{i18n>masterTitle}",
			content: [
			
			          new sap.m.Button({
			        	  text:"{i18n>someAction}"
			          })
			]
		});
 		return oPage;
	}

});