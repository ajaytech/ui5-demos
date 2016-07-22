sap.ui.jsview("formcss.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf formcss.demo
	*/ 
	getControllerName : function() {
		return "formcss.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf formcss.demo
	*/ 
	createContent : function(oController) {
 		
		var oSimpleForm = new sap.ui.layout.form.SimpleForm({

            content: [
                new sap.m.Label({
                    text: "Simple Form"
                }),
                new sap.m.Input({
                    placeholder: "Simple Input",
                }),
                new sap.m.Button({
                    text: "Press me"
                }),
                new sap.m.RatingIndicator({
                    value: 4.7
                }),
                new sap.m.TextArea({
                    value: "Awsome text area"
                }),
                new sap.m.DatePicker({

                }),
               
                new sap.m.VBox({
                    items: [

                        new sap.m.Button({
                            text: "VBox Btn1"
                        }),
                        new sap.m.Button({
                            text: "VBox Btn2"
                        })
                    ]
                }),
                new sap.m.HBox({
                    
                    items:[
                         new sap.m.Button({
                            text: "HBox Btn1"
                        }),
                        new sap.m.Button({
                            text: "HBox Btn2"
                        })
                        ]
                })


            ]

        });
		
		var oPage = new sap.m.Page({
			title: "Form",
			content: [
			          		oSimpleForm
			]
		});
	}

});