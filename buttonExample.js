Ext.Loader.setConfig({
    enable: true
});

Ext.require([
    'Ext.button.*'
]);


Ext.onReady(function(){

    var myButton = Ext.create('Ext.button.Button',{
        text : 'My First Button',
        tooltip: 'Click me...',
        renderTo: Ext.getBody()
    });
});