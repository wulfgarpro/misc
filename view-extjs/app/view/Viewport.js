Ext.define('Foo.view.Viewport', {
    requires: ['Foo.view.form.FooForm'],
    extend: 'Ext.container.Viewport',
    alias: 'widget.fooport',
    layout: 'ux.center',

    initComponent: function() {
        this.items = [{
            xtype: 'fooform'            
        }];
        
        this.callParent(arguments);
    }
});