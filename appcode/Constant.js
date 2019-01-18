Ext.define("MyApp.Constants", {
    singleton: true,
    title: 'EXT JS Application',
    major:1,
    minor: 0,
    revision: 0,
    getVersion: function(){
        return this.major + "." + this.minor +"." + this.revision;
    }
});