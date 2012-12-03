var constructor = function(title, code, language, tags) {
	this.title = title ? title : '';
	this.code = code;
	this.language = language;
	this.tags = tags ? tags.split(",") : '';

	this.toHtmlString = function() {
		var out = "<div><p><b>" + this.title + "</b></p>";
		out += "<p><pre>" + this.code + "</pre></p>";
		out += "<span style='font-size: -1'>" + this.language + "</span><br/>";
		if(this.tags) {
			out += "<span style='font-size: -1'>" + this.tags + "</span>";
		}
		out += "</div>";

		return out;
	}
}

module.exports=constructor;