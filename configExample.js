Ext.define('Myapp.sample.Employee',{		
    config: {
        name:'Unkown',
	    lastName:'Unkown',
        age:0,
        isOld:false
    }, 
	constructor: function (config){
		this.initConfig(config)
		console.log('class A created – fullname:' + this.name + ' ' + this.lastName); 
	},
	work: function( task ){
		console.log( this.getName() + ' is working on: ' + task);
    },
    applyAge:function(newAge){
       this.setIsOld((newAge>=70));
       return newAge;
    }

});

var saket = Ext.create('Myapp.sample.Employee',{
        name:'Saket',
	    lastName:'Kumar',
        age:21,
        isOld:false
});

console.log(saket.getName());
console.log(saket.getLastName());
console.log(saket.getAge());
console.log(saket.setAge(47));
console.log(saket.getAge());
saket.setName('Saket IBM');
saket.work('Ext JS');
