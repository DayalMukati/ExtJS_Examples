Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
	'Ext.window.*'//'Ext.MessageBox'
]);

Ext.onReady(function(){
    var myButton = Ext.create('Ext.button.Button',{
        text: 'Add Payment Method',
        iconCls:'addicon-16',
        scale:'small',
        renderTo: 'menu1',
        menu:[
            {text: 'Master Card'},
            {text: 'Visa Card'},
            {text: 'Pay Pal'},
            {text: 'Paytm'},
            {text: 'PhonePe'},

        ]
    });
});