Ext.Loader.setPath('Ext.ux','extjs/examples/ux');
Ext.require('Ext.ux.layout.Center');

Ext.application({
    name: 'Foo',
    appFolder: 'app',
    autoCreateViewport: true,
    controllers: [
        'Views'
    ]
});