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
            {text: 'Master Card', 
            listeners: {
                click:function(){
                    Ext.Msg.alert("Event triggered Master Card");
                }
            }
        },
            {text: 'Visa Card',
             handler: onMenuItemClick},


            {text: 'Pay Pal',
                listeners: { 
                    'click': {fn:onMenuItemClick}
                }},
                
            {text: 'Paytm'},
            {text: 'PhonePe'},

        ]
    });

    function onMenuItemClick(itemBtn, Event){
        var optionString = itemBtn.text;
        Ext.Msg.alert ("click event , You selected " + optionString );
    }

});