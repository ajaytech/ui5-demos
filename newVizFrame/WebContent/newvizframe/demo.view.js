sap.ui.jsview("newvizframe.demo", {

    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
    * @memberOf vizframe.barchart
    */ 
    getControllerName : function() {
        return "newvizframe.demo";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf vizframe.barchart
    */ 
    createContent : function(oController) {
    	 var oVizFrame = new sap.viz.ui5.controls.VizFrame();
    	 
    	//Create Viz dataset to feed to the data to the graph
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions : [{
                name : 'Name',
                value : "{bar>Name}"
                    }],
                           
            measures : [{
                name : 'Popularity',
                value : '{bar>Popularity}'
                    }],
                         
            data : {
                path : "bar>/names"
            }
        });   
    
    //oVizFrame.setVizType('column');
    
    /*
    
    var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
          'uid': "size",
          'type': "Measure",
          'values': ["Popularity"]
        });
       var  feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
          'uid': "color",
          'type': "Dimension",
          'values': ["Name"]
        });*/
     /*
    oVizFrame.addFeed(feedSize);
    oVizFrame.addFeed(feedColor);
    oVizFrame.setVizType('pie');
    oVizFrame.setDataset(oDataset);
    
    */
        var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid': "valueAxis",
            'type': "Measure",
            'values': ["Popularity"]
          });
         var  feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid': "categoryAxis",
            'type': "Dimension",
            'values': ["Name"]
          });
       
      oVizFrame.addFeed(feedValueAxis);
      oVizFrame.addFeed(feedCategoryAxis);
      oVizFrame.setVizType('bar');
      oVizFrame.setDataset(oDataset);
   
    

        var oPage = new sap.m.Page({
            title: "Charts",
            content: [
                      	oVizFrame
            ]
        });
        return oPage;
    }

});