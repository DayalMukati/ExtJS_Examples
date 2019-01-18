Ext.Loader.setConfig({
    enabled: true,
    paths:{
        MyApp:'appcode'
    }
});


Ext.require([
    'Ext.data.*',
    'MyApp.model.Employee',
    'MyApp.model.ClientWithContacts'
]);

Ext.onReady(function(){

var myclient = Ext.create('MyApp.model.ClientWithContacts',{
    id : 10001,
    name : 'IBM India',
    Phone : '+91 8762689754',
    website : 'www.ibm.com',
    status : 'Active',
    clientSince : '2003-01-01 09:00'
});


myclient.employees().add(
    {id:101, clientid: 10001, name : 'John', phone: '+91 9999999999', email : 'john@ibm.com', gender: 'male'},
    {id:102, clientid: 10001, name : 'Patrica', phone: '+91 8888999999', email : 'patrica@ibm.com', gender: 'female'},
    {id:103, clientid: 10001, name : 'martin', phone: '+91 9999999000', email : 'martin@ibm.com', gender: 'male'}
 );

 myclient.employees().each(function(record){
     console.log(record.get('name')+ "-" + record.get('phone'));
 })


});