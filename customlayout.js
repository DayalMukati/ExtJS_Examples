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
    split: true,
    layout:'border',
    },{
    xtype: 'panel',
    title: 'West Region',
    region: 'west',
    width:200,
    collapsible:true,
    layout:'accordion',
    split: true
    },{
    xtype: 'panel',
    title: 'Central Region',
    region: 'center', 
    
    html: '<b> Main Contents </b> <b> Main Contents </b> goes here '
    },{
    xtype: 'panel',
    title: 'East Region',
    region: 'east',
    width:200,
    collapsible:true,
    layout:'fit',
    split: true
    }],
    renderTo: Ext.getBody()
    });
    }); 