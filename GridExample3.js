// JavaScript Document
Ext.Loader.setConfig({
    enabled: true,
	paths:{
		Myapp:'appcode'	
	}	
});
Ext.require([
	'Ext.tip.*',
    'Ext.grid.*',
	'Myapp.model.Contract',
	'Myapp.model.Customer',
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
			align:'center'
        },{
            xtype: 'numbercolumn',
            dataIndex: 'id',
            text: 'Id',
            format: '0' //0,000.00
        },{
            xtype: 'templatecolumn',
            text: 'Country',
			dataIndex: 'country',			
			tpl: '<div> <div class="flag_{[values.country.toLowerCase()]}">&nbsp</div> &nbsp;&nbsp;{country}</div>'
        },{
            width: 190,
			dataIndex: 'name', 
			text: 'Customer name',
			// Renderer # 1 
			renderer: function(value, metaData, record, rowIndex, colIndex, Store, view ){
				if (record.get('country')!="USA"){ 
					metaData.tdCls = 'customer_foregin';	
				} 	
				return value;			
			}
        },{
            xtype: 'datecolumn',
            dataIndex: 'clientSince',
			align:'center',
			width: 150,	
            text: 'Client Since',
			format: 'M-d-Y H:i',
			// Renderer # 2 
			renderer:function(value, metaData, record, rowIndex, colIndex, Store, view ){
				if (value.getFullYear() < 2014 ){ 
					metaData.tdStyle = " font-size:0.9em; color:#666; "; 	
				}
				return Ext.util.Format.date(value, 'Y-M-d');
			}
        },{
            width: 150,
            dataIndex: 'status', 
			align:'center',
            text: 'Status', 
			// Renderer # 3 			
			renderer:function(value, metaData, record, rowIndex, colIndex, Store, view ){
				var myclass= 'cust_' + value.toLowerCase();
				metaData.tdCls = myclass;
				if (value.toLowerCase()=='inactive'){
					metaData.tdStyle = " font-size:0.9em; "; 
				} else if (value.toLowerCase()=='suspended'){
					metaData.tdStyle = " font-size:0.9em; "; 
					metaData.tdAttr = 'bgcolor="ffc6c6"';
				}
				return value;
			}
        }
		],
		store: myStore, 
		renderTo: Ext.getBody()
	}); 

});