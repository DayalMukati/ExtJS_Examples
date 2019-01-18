Ext.define('MyApp.sample.MyContainer', {
    extend: 'Ext.container.Container',
    border: true,
    padding: 10,

    initComponent : function(){
        var me = this;
        Ext.each(me.items,function(item){
            item.style = {
                backgroundColor: "#f4f4f4",
                border: "2px solid #333"
            };
            item.padding = 10;
            item.height = 100;
        });
        me.callParent();
    },

    onRender : function(){
        var me = this;
        me.callParent(arguments);
        if(me.border){
            me.el.setStyle("border", "1px solid #333");
        }
    }
});



Ext.onReady(function(){
    Ext.create('MyApp.sample.MyContainer',{
        renderTo: Ext.getBody(),
        items : [{
            xtype : 'component',
            html: 'Childcomponent one'
        }, {
            xtype : 'component',
            html: 'Childcomponent two'
        }]
    });
});