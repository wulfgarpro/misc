describe("Views", function() {
	var fooform = null;
	var controller = null;
	
	beforeEach(function() {
		if(controller === null) {
			controller = Application.getController('Views')
		}
		
		if(fooform === null) {			
			fooform = controller.getView('form.FooForm').create();
		}
		
		expect(fooform).toBeTruthy();
	});
	
	it("should add my two numbers correctly", function() {
		expect(controller.add(1,1)).toEqual(2);
		expect(controller.add(1,1)).not.toEqual(1);
	});
	
	it("should have text fields", function() {	
		expect(fooform.query('textfield[id="titletxt"]')).toBeDefined();
	});
});