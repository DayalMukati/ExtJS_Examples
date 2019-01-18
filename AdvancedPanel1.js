Ext.onReady(function(){
    var MyPanel = Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        title: 'My First Panel',
        width: 300,
        height:300,
        tools:[
            {type:'help'},
            {type:'search'}
        ],
        html: ' <b> here </b> goes some <i> contents</i>...'
    });
});