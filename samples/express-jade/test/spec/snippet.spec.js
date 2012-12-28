var Snippet = require('../../snippet.js');

describe('Snippet', function() {
    expect(Snippet).toBeDefined();

    it('can be constructed', function() {
        var snippet = new Snippet();
        expect(snippet).toBeDefined();
    });
});
