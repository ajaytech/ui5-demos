sap.ui.jsview("eventdemo4_advance.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventdemo4_advance.demo
	*/ 
	getControllerName : function() {
		return "eventdemo4_advance.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventdemo4_advance.demo
	*/ 
	createContent : function(oController) {
		
 		var oBtn1 = new sap.m.Button({
 			text:"Cool Button" 			
 		}).addEventDelegate({
 			
 			onAfterRendering:function(oBtn){
 				$(oBtn.srcControl.getDomRef()).draggable({
 					cancel:true
 				});
 			}
 		});
		
		var oPage = new sap.m.Page({
			title: "Event Advance",
			content: [
			          	oBtn1
			]
		});
	return oPage;
	}

});