Ext.onReady(function(){
    var win = Ext.create("Ext.window.Window", {
        title: "My FirstWindow",
        width: 500,
        height : 400,
        maximizable:true,
        layout: "accordion",
        defaults:{
            xtype: "panel", height:60, border:false
        },
        items:[
            {title:"Menu", html: "This is my main Menu"},
            {title:"Content1", html: "This is my Content1 Menu"},
            {title:"Content2", html: "This is my Panel 3"},
            {title:"Content3", html: "This is my Panel 4"},
            {title:"Content4", html: "This is my Panel 5"}

        ]
    });

    win.show();

    setTimeout(function(){
        win.getLayout().getLayoutItems()[1].expand();
    }, 3000);
})