sap.ui.jsfragment("fragmentdemo.demo", {



    createContent: function(oController) {


        var oItemTemplate = new sap.m.StandardListItem({
            title: "{list>Name}",
            active: true
        })



        var oSelDialog = new sap.m.SelectDialog({
            noDataText: "Empty",
            title: "Animals",
            liveChange: [oController.handleSearch, oController],
            confirm: [oController.handleConfirm, oController],
            type: "Active"
            	});

        oSelDialog.bindAggregation("items", "list>/names", oItemTemplate);

        return oSelDialog;
    }
});

