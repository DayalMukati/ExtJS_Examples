// JavaScript Document
Ext.Loader.setConfig({
    enabled: true,
	paths:{
		Myapp:'appcode'	
	}	
});
Ext.require([
	'Ext.tip.*',
	'Ext.sparkline.*',
    'Ext.grid.*',
	'Ext.ProgressBarWidget',	
	'Myapp.model.CustomerWidgets'	
]);
Ext.onReady(function(){
	Ext.tip.QuickTipManager.init();
	
	var myStore = Ext.create('Ext.data.ArrayStore',{		
		model:'Myapp.model.CustomerWidgets',
		data:[
			[10001 ,"Acme corp2", 0.75 ,  [30,14,20,36] ],
			[10002 ,"Candy Store LTD", 0.9 ,  [50,14,20,16] ],		
			[10003 ,"Modern Cars of America", 0.35 ,  [15,10,39,36] ],			
			[10004 ,"Extreme Sports Los Cabos", 0.174 ,  [30,29,5,18] ]					
		]		
	});
		
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
            width: 200,
			dataIndex: 'name', 
			text: 'Customer name'
        },{
            xtype: 'widgetcolumn',
            text: 'Project Advances',
			dataIndex: 'progress',			
 			widget: {
        		xtype: 'progressbarwidget',
            	textTpl: [' <div style="font-size:0.9em;">{percent:number("0")}% done.</div> ']
        	}	
        },{
            xtype    : 'widgetcolumn',
			text     : 'Slider',
            width    : 100,
            dataIndex: 'progress',
            widget: {
                xtype: 'sliderwidget',
                minValue: 0, maxValue: 1, decimalPrecision: 2,
                listeners: {
                    change: function(slider, value) {
                        if (slider.getWidgetRecord) {
                            var rec = slider.getWidgetRecord();
                            if (rec) { rec.set('progress', value); }
                        }
                    }
                }
            }
        },{
            xtype: 'widgetcolumn',
			width: 100, align:'center', 
			dataIndex:'piesequence', 
			text: 'Pie chart',
            widget: { xtype: 'sparklinepie' }
		}
		],
		store: myStore, 
		renderTo: Ext.getBody()
	}); 

});