Ext.Loader.setConfig({
    enabled: true,
	paths:{
		Myapp:'appcode'	
	}	
});
Ext.require([
    'Ext.grid.*',
	'Myapp.model.Contract',
	'Myapp.model.Customer1',
	'Myapp.store.customers.Customers'
]);
Ext.onReady(function(){

	var myStore = Ext.create("Myapp.store.customers.Customers"); 
	var myGrid = Ext.create('Ext.grid.Panel',{
		height: 250,
		width:  800,
		title: 'My customers',	
		columns: [{
				width: 70,
				dataIndex: 'id',
				text: 'Id'
			},{
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
			},{
				width: 160,
				dataIndex: 'clientSince',
				text: 'Client Since'
		}],
		store: myStore, 
		renderTo: Ext.getBody()
	}); 

});