Ext.define('Myapp.sample.EmployeePanel',{
    extend:'Ext.panel.Panel',
    aliaz: 'widget.employeePanel',
    alternateClassName:'mycustomeremployeepanel',
    title:'Employee Panel'
    });
    
    Ext.onReady(function(){
    Ext.create('widget.employeePanel', {
    title:'Employee Panel: Jeetendra Tripathi..',
    height:400,
    width:400,
    renderTo:Ext.getBody()
    });
    }); 