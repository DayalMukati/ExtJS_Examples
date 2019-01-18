Ext.define('Myapp.sample.Employee',{		
	name:'Unkown',
	lastName:'Unkown',
	age:0, 
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('class A created – fullname:' + this.name + ' ' + this.lastName); 
	},
	work: function( task ){
		console.log( this.name + ' is working on: ' + task);
	}
});

Ext.define('Myapp.sample.tasks.attendPhone',{
	answerPhone:function(){
		console.log( this.name + ' is answering the phone'); 
	}
});
Ext.define('Myapp.sample.tasks.attendCellPhone',{
	extend: 'Ext.Mixin', 
	
	mixinConfig:{
		before:{
			answerCellPhone:'cellPhoneRinging'	
		},
		after:{
			answerCellPhone:'finishCall'
		}	
	},
	cellPhoneRinging: function(){
		console.log( 'cell phone is ringing you may attend call'); 
	},	
	finishCall: function(){
		console.log( 'cell phone call is over'); 
	}
});
Ext.define('Myapp.sample.tasks.attendClient',{
	attendClient:function(clientName){
		console.log( this.name + ' is attending client: ' + clientName); 
	}
}); 
Ext.define('Myapp.sample.tasks.attendMeeting',{
	attendMeeting:function(person){
		console.log( this.name + ' is attending a meeting with ' + person); 
	}
}); 
Ext.define('Myapp.sample.tasks.superviseEmployees',{
	superviseEmployee:function(supervisor, employee){
		console.log( supervisor.name + ' is supervising : ' + employee.name + ' ' + employee.lastName); 
	}
}); 




Ext.define('Myapp.sample.Secretary',{
	extend:'Myapp.sample.Employee', 	
	mixins:{
		answerPhone: 'Myapp.sample.tasks.attendPhone',	
		util:'Myapp.sample.tasks.attendCellPhone' 
	},
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('Secretary class created – fullname:' + this.name + ' ' + this.lastName); 
	},
	answerCellPhone:function(){
		console.log( this.name + ' is answering the cellphone'); 
	}		
});
Ext.define('Myapp.sample.Accountant',{
	extend:'Myapp.sample.Employee', 
	mixins:{
		attendClient: 'Myapp.sample.tasks.attendClient',
		attendMeeting: 'Myapp.sample.tasks.attendMeeting'
	},
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('Accountant class created – fullname:' + this.name + ' ' + this.lastName); 
	}
}); 
Ext.define('Myapp.sample.Manager',{
	extend:'Myapp.sample.Employee', 
	mixins:{
		attendClient:  'Myapp.sample.tasks.attendClient',
		attendMeeting: 'Myapp.sample.tasks.attendMeeting',
		supervisePersons: 'Myapp.sample.tasks.superviseEmployees'
	},
	constructor: function (config){
		Ext.apply(this, config || {});
		console.log('Manager class created – fullname:' + this.name + ' ' + this.lastName); 
	},
	supervise: function(employee){ 
		console.log( this.name + ' starts supervision '); 
		this.mixins.supervisePersons.superviseEmployee(this, employee); 
		console.log( this.name + ' finished supervision '); 
	} 
});




var vikas=Ext.create('Myapp.sample.Secretary', {name:'Vikas', lastName:'Kumar', age:25 } ); 
vikas.work('Ext JS');
vikas.answerPhone(); 
vikas.answerCellPhone(); 