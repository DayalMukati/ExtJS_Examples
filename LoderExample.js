Ext.Loader.setConfig({
    enabled: true,
    paths:{
        MyApp:'appcode'
    }
});


Ext.require([
    'MyApp.Constants',
    'MyApp.samples.demoClass'
]);

Ext.onReady(function(){
    console.log("App title = "+ MyApp.Constants.title);
    console.log("App title = "+ MyApp.Constants.getVersion());

    var testClass = Ext.create('MyApp.samples.demoClass', {initialValue:25});

    console.log(testClass.getDescription());
});