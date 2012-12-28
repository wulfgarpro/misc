var Snippet = function(title, lang, code, tags, name) {
    // optional
    this.title = (typeof title === 'undefined') ? '' : title;
    this.tags = (typeof tags === 'undefined') ? '' : tags.split(' ');
    this.name = (typeof name === 'undefined') ? '' : name;

    // mandatory
    if(typeof lang === 'undefined') {
        throw new Error('No lang supplied for snippet.');
    }

    if(typeof code === 'undefined') {
        throw new Error('No code supplied for snippet.');
    }

    this.lang = lang;
    this.code = code;
};
module.exports = Snippet;
