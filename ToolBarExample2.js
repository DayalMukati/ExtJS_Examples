Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
    'Ext.window.*',
    'Ext.toolbar'
]);

Ext.onReady(function(){
   var myPanel = Ext.create('Ext.panel.Panel',{
       title : 'My First Toolbar',
       width : 500,
       height : 500,
       dockedItems : [{
           xtype: 'toolbar',
           dock : 'top',
           items: [
           {
               xtype: 'buttongroup',
               title : 'Actions',
               items : [
                {text:' New', iconCls : 'addicon-16'},
                {text: 'Edit', iconCls : 'editicon-16'},
                {text: 'Remove', iconCls : 'deleteicon-16'}
               ]
           },{
            xtype: 'buttongroup',
            title : 'Actions',
            items : [
             {text:' Export', iconCls : 'export-16'},
             {text: 'Print', iconCls : 'print-16'},
             {text: 'Help', iconCls : 'help-16'}
            ]
           }
               
           ]
       }], 
       renderTo: Ext.getBody()
   });
});