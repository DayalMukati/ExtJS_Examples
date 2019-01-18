Ext.onReady(function(){
    var win = Ext.create('Ext.window.Window', {
        title: 'Fit Layout',
        width: 300,
        height: 150,
        layout:'fit',
        items: {
            title: 'Inner Panel',
            html: 'This is the inner panel content',
            bodyPadding: 20,
            border: false
        }
    });

    win.show();

    setTimeout(function(){
        win.getLayout().setActiveItem();
    }, 3000);
})