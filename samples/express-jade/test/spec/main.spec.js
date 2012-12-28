var main = require('../../main.js')
       , Snippet = require('../../snippet.js')
       , example = require('./example.snippets.js');

describe('Main', function() {
    beforeEach(function() {
        expect(main).toBeDefined();
    });

    afterEach(function() {
        var snippets = main.getSnippet();

        for(var snippet in snippets) {
            main.removeSnippet(snippet);
        }

        expect(main.getSnippet().length).toEqual(0);
    });

    it('adds a valid snippet', function() {
       var snippet = example.javaSnippet; 

       expect(snippet).toBeDefined();

       expect(main.addSnippet(snippet)).toBeTruthy();

       expect(main.getSnippet(snippet.name)).toBeTruthy();
    });

    it('doesn\'t add an invalid snippet', function() {});

    it('retrieves all snippets', function() {

    });

    it('retrieves a specified snippet', function() {});
    it('removes all snippets', function() {});

    it('removes a specified snippet', function() {
        
    });

    it('generates random snippet names', function() {
        var nameA;
        var nameB;

        expect(nameA).toBeUndefined();
        expect(nameB).toBeUndefined();

        nameA = main._generateRandomName();
        nameB = main._generateRandomName();

        expect(nameA).toBeDefined();
        expect(nameB).toBeDefined();

        expect(nameA === nameB).toBeFalsey();
        expect(nameA == nameB).toBeFalsey();
    });

    it('caches newly added snippets in memory', function() {});
});
