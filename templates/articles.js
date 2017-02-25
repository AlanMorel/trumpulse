(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['articles'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "	<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" draggable=\"false\">\r\n		<div class=\"article\" draggable=\"false\">\r\n			<img src=\""
    + alias2(alias1((depth0 != null ? depth0.urlToImage : depth0), depth0))
    + "\" draggable=\"false\">\r\n			<div class=\"title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\r\n		</div>\r\n	</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"articles\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();