Ext.define('Foo.view.form.FooForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.fooform',
    title: 'My Widget with a Form!',
    bodyPadding: 5,
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    autoScroll: true,
    maxWidth: 500,    

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Title',
        name: 'title',
        allowBlank: false,
        id: 'titletxt',
    },
    {
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    },
    {
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    },
    {
        fieldLabel: 'Country',
        name: 'country',
        allowBlank: false
    },
    {
        xtype: 'tabpanel',
        plain: true,
        activeTab: 0,
        bodyPadding: 5,
                    
        items: [{
            defaultType: 'textfield',
            labelAlign: 'left',
            title: 'Some more fields...',
            items: [{
                fieldLabel: 'Occupation',
                name: 'occupation',
                allowBlank: false
            },
            {
                fieldLabel: 'Education',
                name: 'education',
                allowBlank: false
            }],
        }],
    }],
	
    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function () {
            this.up('form').getForm().reset();
        }
    },
    {
        text: 'Submit',
        id: 'submitbtn',
        formBind: true,
        //only enabled once the form is valid
        disabled: true,
        handler: function () {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                Ext.Msg.alert('Success!', 'Form is valid.');
                /*form.submit({
                    success: function (form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });*/
            }
            else {
                Ext.Msg.alert('Failure!', 'Form is invalid.');
            }
        }
    }] 
});