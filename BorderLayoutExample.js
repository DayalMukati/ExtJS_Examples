Ext.onReady(function(){
    Ext.create('Ext.panel.Panel',{
        width: 700, height: 700,
        title: 'Border Layout',
        layout: 'border',
        items: [{
            xtype: 'panel',
            title: 'South Region is Resizable',
            region: 'south',
            height:100,
            split: true
        },{
            xtype: 'panel',
            title: 'West Region',
            region: 'west',
            width:200,
            collapsible:true,
            layout:'fit',
            split: true
        },{
            xtype: 'panel',
            title: 'Central Region',
            region: 'center',
            layout:'fit',
            margin:'5 5 0 0',
            html: '<b> Main Contents </b> goes here '
        }],
        renderTo: Ext.getBody()
    });
});