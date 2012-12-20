var Snippet = function(title, lang, code, tags, name) {
    this.title = title ? title : '';
    this.lang = lang;
    this.code = code;
    this.tags = tags ? tags.split(',') : '';
    this.name = name;
};
module.exports = Snippet;
