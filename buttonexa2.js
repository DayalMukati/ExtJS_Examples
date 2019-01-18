Ext.Loader.setConfig({
    enabled: true
});

Ext.require([
    'Ext.button.*',
	'Ext.window.*'//'Ext.MessageBox'
]);

Ext.onReady(function(){
		
	var myButtonA = Ext.create('Ext.button.Button',{
		text:'left icon',
		iconCls:'addicon-16',
		iconAlign:'left',
		renderTo:Ext.getBody()
	});
	
	myButtonA.on('click',function(){
		Ext.Msg.alert("Click event","You clicked left icon button..!");
	});

	var myButtonB = Ext.create('Ext.button.Button',{
		text:'top icon',
		iconCls:'addicon-16',
		iconAlign:'top',
		renderTo:Ext.getBody()
	});

	var myButtonC = Ext.create('Ext.button.Button',{
		text:'right icon',
		iconCls:'addicon-16',
		iconAlign:'right',
		renderTo:Ext.getBody()
	});	
		
	var myButtonD = Ext.create('Ext.button.Button',{
		text:'bottom icon',
		iconCls:'addicon-16',
		iconAlign:'bottom',
		renderTo:Ext.getBody()
	});	
	
});