sap.ui.jsview("vizdemo.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf vizdemo.first
	*/ 
	getControllerName : function() {
		return "vizdemo.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf vizdemo.first
	*/ 
	createContent : function(oController) {
		// create some dummy JSON oData
		
	
		var oDataChart = new sap.viz.core.FlattenedDataset({
            dimensions: [{
                    axis: 1,
                    name: "Name",
                    value: "{Name}"
                },{
                    axis: 2,
                    name: "Place",
                    value: "{Place}"
                }
                
            ],
            measures: [{
                name: 'Average Weight',
                value: '{Avg_Weight}'
            }],
            data: {
                path: "/names"
            }
        });
		var oBarChart = new sap.viz.ui5.Bar({

            width: "80%",
            title: {
                visible: true,
                text: 'Animal size overview'
            },
            dataset: oDataChart
        });
		var oPage =  new sap.m.Page({
			title: "Bar Chart",
			content: [
			          	oBarChart			
			]
		});
 		return oPage;
	}

});