/*
 * File: app/view/CustomerForm01.js
 */
Ext.define('Myapp.view.CustomerForm01', {
    extend: 'Ext.form.Panel',
    alias: 'widget.customerform01',
    requires: [
        'Ext.form.field.Number',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],
    height: 280,
    width: 448,
    animCollapse: true,
    bodyPadding: 6,
    collapsible: false,
    header: true,
    title: 'Customer ( .... )',
	defaultType:'textfield',
	defaults:{
		anchor:'-18',
		labelWidth:90, 
		labelAlign:'right'	
	}, 	
    items: [
        {
			xtype: 'numberfield',
			//anchor: '100%',
			// maxWidth: 200,
			//minWidth: 200,
			fieldLabel: 'Customer ID',
			// labelAlign: 'right',
			// labelWidth: 80,
			// msgTarget: 'side',
			// hideTrigger: true
        },{
			//xtype: 'textfield',
			//anchor: '-18',
			fieldLabel: 'Name',
			//labelAlign: 'right',
			//labelWidth: 80,
			//msgTarget: 'side'
        },{
            //xtype: 'textfield',
            //anchor: '-18',
            fieldLabel: 'Phone',
            //labelAlign: 'right',
            //labelWidth: 80,
            // msgTarget: 'side'
        },{
            //xtype: 'textfield',
            //anchor: '-18',
            fieldLabel: 'Web site',
            //labelAlign: 'right',
            //labelWidth: 80,
            //msgTarget: 'side'
        },{
            xtype: 'datefield',
            //anchor: '60%',
            //width: '',
            fieldLabel: 'Client since',
            //labelAlign: 'right',
            //labelWidth: 80,
            //msgTarget: 'side'
        },{
            xtype: 'combobox',
            //anchor: '-18',
            fieldLabel: 'Status',
            //labelAlign: 'right',
            //labelWidth: 80,
            //msgTarget: 'side'
        }
    ],
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                    xtype: 'tbfill'
                },{
                    xtype: 'button',
                    iconCls: 'save-16',
                    text: 'Save...'
                }
            ]
        },{
            xtype: 'toolbar', dock: 'top',
            items: [{
                    xtype: 'button',
                    iconCls: 'addicon-16',
                    text: 'New'
                },{
                    xtype: 'button',
                    iconCls: 'editicon-16',
                    text: 'Edit'
                },{
                    xtype: 'tbfill'
                },{
                    xtype: 'button',
                    iconCls: 'deleteicon-16',
                    text: '<b>Delete</b>'
                }
            ]
        }
    ]

});