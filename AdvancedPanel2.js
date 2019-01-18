Ext.onReady(function(){
    var MyPanel = Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        title: 'My First Panel',
        width: 300,
        height:300,
        tools:[
            {type:'help'},
            {type:'search'},
            {type : 'print'}
        ],
        
        items: [{
            xtype:'datefield',
            fieldLabel: 'Start Date'
        },{
            xtype:'datefield',
            fieldLabel: 'End Date'
        }],

        dockedItems: [
            {
                xtype:'toolbar',
                dock : 'bottom',
                items:[
                    {
                        xtype : 'button',
                        text : 'Click Me'
                    }
                ]
            }
        ]
    });
});