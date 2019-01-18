Ext.Loader.setConfig({
    enabled: true,
	paths:{
		Myapp:'appcode'	
	}	
});
Ext.require([
    'Ext.grid.*',
    'Ext.tip.*',
	'Myapp.model.Contract',
	'Myapp.model.Customer1',
	'Myapp.store.customers.Customers'
]);
Ext.onReady(function(){

    Ext.tip.QuickTipManager.init();
	var myStore = Ext.create("Myapp.store.customers.Customers"); 
	var myGrid = Ext.create('Ext.grid.Panel',{
		height: 250,
		width:  800,
		title: 'My customers',	
		columns: [
            {
                xtype: 'rownumberer',
                width: 50,
                align:'center'
            },{ 
                xtype:'numbercolumn',           
				width: 70,
				dataIndex: 'id',
                text: 'Id',
                format: '000.00'
			},{
                xtype:'templatecolumn',  
				dataIndex: 'country',
                text: 'Country',
                tpl : '<div><div class="flag_{[values.country.toLowerCase()]}">&nbsp;</div>&nbsp; &nbsp; {country}</div>'
			},{
                xtype: 'gridcolumn',
				width: 160,
				dataIndex: 'name',
				text: 'Customer name'
			},{
				width: 110,
				dataIndex: 'phone',
				text: 'Phone'
			},{
				width: 160,
				dataIndex: 'website',
				text: 'Website'
			},{
				width: 80,
				dataIndex: 'status',
				text: 'Status'
            },
            {
                xtype : 'checkcolumn',
				width: 80,
				dataIndex: 'sendnews',
                text: 'Send News ?'
                
			},{
                xtype: 'datecolumn',
				width: 160,
				dataIndex: 'clientSince',
                text: 'Client Since',
                format: 'M-d-Y H:i'
		}],
		store: myStore, 
		renderTo: Ext.getBody()
	}); 

});