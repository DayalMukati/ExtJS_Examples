Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
	'Ext.window.*'//'Ext.MessageBox'
]);

Ext.onReady(function(){

    var mysegmentedbuttons = Ext.create('Ext.button.Segmented',{
        renderTo: 'segmentedbuttons',
        vertical:true,
        items:[{
            xtype: 'button', text : 'First Button', iconCls: 'addicon-16'
        },{
            xtype: 'button', text : 'Second Button', iconCls: 'addicon-16'
        },{
            xtype: 'button', text : 'Third Button', iconCls: 'addicon-16'
        },{
            xtype: 'button', text : 'Fourth Button', iconCls: 'addicon-16'
        }]
    });
});