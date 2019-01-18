Ext.onReady(function(){
    var win = Ext.create("Ext.window.Window", {
        title: "My FirstWindow",
        width: 500,
        height : 400,
        maximizable:true,
        layout: "anchor",
        defaults:{
            xtype: "panel", height:60, border:false
        },
        items:[
            {title:"Menu", html: "This is my main Menu panel at 100% - 10 px ", anchor: '-10'},
            {title:"Content1", html: "This is my Content1 panel at 70% of anchor", anchor: '70%'},
            {title:"Content2", html: "This is my Panel 50% width and 40% height of anchor", anchor:'50% 40%', bodyStyle: 'background-color: #fc3;'}
        
        ]
    });


    win.show();
});