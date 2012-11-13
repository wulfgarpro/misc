describe("Basic assumptions", function() {
	it("has ExtJS4 loaded", function() {
		expect(Ext).toBeDefined();
		expect(Ext.getVersion()).toBeTruthy();
		expect(Ext.getVersion().major).toEqual(4);
	});
	
	it("has loaded Foo code", function() {
		expect(Foo).toBeDefined();
		expect(Application.getController('Views')).toBeDefined();
	});
});