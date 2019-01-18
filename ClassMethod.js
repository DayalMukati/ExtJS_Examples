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
    
    var Jeetendra = Ext.create('Myapp.sample.Employee', {name: 'Jeetendra', lastname:'Tripathi', age:35});
    Jeetendra.checkAge();
    Jeetendra.work('Ext JS');
    