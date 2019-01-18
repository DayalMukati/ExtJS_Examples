Ext.define('MyApp.model.ClientWithContacts', 
{
    extend: 'Ext.data.Model',
    requires: ['MyApp.model.Employee'],
    idProperty:'id',
    fields:[
        {name: 'id', type : 'int'},
        {name: 'name', type : 'string'},
        {name: 'phone', type : 'string'},
        {name: 'website', type : 'string'},
        {name: 'status', type : 'string'},
        {name: 'clientSince', type : 'date', dateFormat: 'Y-m-d H:i'}
    ],
    hasMany:{
        model:'MyApp.model.Employee', name:'employees', assoiciationKey: 'employees'
    }
});