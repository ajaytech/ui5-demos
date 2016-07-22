sap.ui.jsview("splitscreenappdemo.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitscreenappdemo.second
	*/ 
	getControllerName : function() {
		return "splitscreenappdemo.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitscreenappdemo.second
	*/ 
	createContent : function(oController) {
 		

       


        var oCol1 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Name"
            })
        });
        var oCol2 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Place"
            }),
        });
        var oCol3 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Id"
            })
        });

        var oTableItems = new sap.m.ColumnListItem({
            cells: [
                new sap.m.Text({
                    text: "{table>Name}"
                }), new sap.m.Text({
                    text: "{table>Place}"
                }), new sap.m.Text({
                    text: "{table>id}"
                })
            ]
        });

        var oTable = new sap.m.Table({
            columns: [
                oCol1,
                oCol2,
                oCol3
            ]
        });


       
        oTable.bindItems({
            path: "table>/",
            template: oTableItems
        });
		var oPage =  new sap.m.Page({
			title: "Detail",
			content: [
			          	oTable
			]
		});
 		return oPage;
	}

});