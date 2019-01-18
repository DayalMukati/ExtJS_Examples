Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
	'Ext.window.*'//'Ext.MessageBox'
]);

Ext.onReady(function(){
    var menuItemA = Ext.create('Ext.menu.Item', 
    {text : 'MasterCard'});

    var menuItemB = Ext.create('Ext.menu.Item', 
    {text : 'Visa Card'});

    var mymenu = Ext.create('Ext.menu.Menu', {
        items : [
            menuItemA,
            menuItemB,
            Ext.create('Ext.menu.Item', {text: 'Amex'}),
            {text: 'Other'}
        ]
    });



    var myButton = Ext.create('Ext.button.Button',{
        text: 'Add Payment Method',
        iconCls:'addicon-16',
        scale:'small',
        renderTo: 'menu1',
        menu:mymenu
        });

        var myButton1 = Ext.create('Ext.button.Button',{
            text: 'Add Payment Method2',
            iconCls:'addicon-16',
            scale:'small',
            renderTo: 'menu1',
            menu:mymenu
            });
});