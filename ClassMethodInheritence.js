Ext.define('Myapp.sample.Employee',{
    name:'Saketh',
    lastname:'Kumar',
    age:0,
    
    constructor:function(config){
    Ext.apply(this,config||{});
    console.log('class created'+this.name+''+this.lastname);
    },
    checkAge:function(){
    console.log('Age of '+this.name+''+this.lastname+'is :'+this.age);
    },
    work:function(task)
    {
    alert(this.name+'is expert developer on:'+task);
    }
    });
    
    Ext.define('Myapp.sample.Supervisor',
    {
    extend:'Myapp.sample.Employee',
    
    constructor:function(config){
    Ext.apply(this,config||{});
    console.log('Inherited class created'+this.name+''+this.lastname);
    },
    
    supervise:function(employee){
    var employeefullname = employee.name+''+ employee.lastname;
    console.log(this.name+'is supervising the work of'+employee.name);
    }
    });
    
    var Jeetendra = Ext.create('Myapp.sample.Employee', {name: 'Jeetendra', lastname:'Tripathi', age:35});
    Jeetendra.checkAge();
    Jeetendra.work('Ext JS');
    
    var Hitesh = Ext.create('Myapp.sample.Supervisor', {name: 'Hitesh', lastname:'Parmar', age:38});
    Hitesh.checkAge();
    Hitesh.work('Ext JS');
    Hitesh.supervise(Jeetendra); 