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
            {text: 'New record'},
            {text: 'Edit record'},
            {text: 'Read record'},
            {text: 'Delete record'}
               
           ]
       }], 
       renderTo: Ext.getBody()
   });
});