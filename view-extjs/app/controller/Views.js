Ext.define('Foo.controller.Views', {
    extend: 'Ext.app.Controller',
    views: [
        'form.FooForm'
    ],

    init: function() {
        this.control({
            'fooform textfield': {
                specialkey: function(field, e) {
                    if(e.getKey() == e.ENTER) {                        
                        field.up('fooform').submit();
                    }
                }
            },
            'fooform textfield[id="titletxt"]': {                
                afterrender: function(field){
                    console.log('Field rendered..');
                    field.focus();
                }                
            }
        });
    },

	add: function(x,y) {
		return x+y;
	}
});