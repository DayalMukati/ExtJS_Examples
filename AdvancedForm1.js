Ext.Loader.setConfig({
    enabled: true,
    paths:{
        Myapp:'appcode'
    }
});


Ext.require([
    'Ext.form.*',
    'Ext.toolbar.*',
    'Ext.button.*',
    'Myapp.view.CustomerForm01'
    
]);

Ext.onReady(function(){

    var panel = Ext.create('Myapp.view.CustomerForm01',{
        title : 'My First Advanced Form',
        renderTo: Ext.getBody()
    } );



});