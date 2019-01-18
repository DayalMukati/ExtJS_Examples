Ext.define("MyApp.samples.demoClass", {
    initialValue: 0,
    constructor: function(config)
    {
        Ext.apply(this, config || {});
    },

    getDescription: function()
    {
        return ' This ia a demoClass with package and its initial  value is :' +this.initialValue;
    }
});