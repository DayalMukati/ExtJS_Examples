Ext.Loader.setConfig({
    enabled: true,
    paths:{
        Myapp:'appcode'
    }
});


Ext.require([
    'Ext.data.*',
    'Myapp.model.Contract',
    'Myapp.model.Customer'
]);

Ext.onReady(function(){

    console.log('Object Created');

    var myclient = Ext.create('Myapp.model.Customer',{
        id : 10001,
        name : 'IBM India',
        Phone : '+91 8762689754',
        website : 'www.ibm.com',
        status : 'Active',
        clientSince : '2003-01-01 09:00',
        contractInfo : {id: 444, contractId: 'ct-001-444', documentType:'PDF'}
    });

    console.log(myclient.data);

    console.log('Object 2 Created');

    var myclientx = Ext.create('Myapp.model.Customer',{
        id : 10001,
        name : 'IBM India',
        Phone : '+91 8762689754',
        website : 'www.ibm.com',
        status : 'Active',
        clientSince : '2003-01-01 09:00'
    });
    console.log(myclientx.data);

});    