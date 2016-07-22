sap.ui.jsfragment("demofragment.demo",{

	
	
	createContent : function(oController){
		
		var oItemTemplate = new sap.m.StandardListItem({
			title:"{list>Name}",
			active:true
		});
		var oSelDialog = new sap.m.SelectDialog({
			
			title:"Animals",
			type:"Active",
			liveChange:[oController.liveChange,oController]
		});
		oSelDialog.bindAggregation("items","list>/names",oItemTemplate);
		
		return oSelDialog;
		
	}
	
	
})


