sap.ui.jsview("barchart.demo", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf barchart.demo
	 */
	getControllerName : function() {
		return "barchart.demo";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf barchart.demo
	 */
	createContent : function(oController) {
		var oVizFram = new sap.viz.ui5.controls.VizFrame();

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				name : 'Name',
				value : "{pie>Name}"
			} ],
			measures : [ {
				name : 'Popularity',
				value : "{pie>Popularity}"
			} ],
			data:{
				path:"pie>/names"
			}
		});
		
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"size",
			'type':"Measure",
			'values':["Popularity"]
		});
		var oFeedCataAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"color",
			'type':"Dimension",
			'values':["Name"]
		});
		
		oVizFram.addFeed(oFeedValueAxis);
		oVizFram.addFeed(oFeedCataAxis);
		oVizFram.setDataset(oDataset);
		oVizFram.setVizType('pie');


		var oPage = new sap.m.Page({
			title : "Pie chart",
			content : [
			           		oVizFram
			]
		});
		return oPage;
	}

});