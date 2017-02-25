(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['sources'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <a href=\"#source/"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" draggable=\"false\">\r\n            <div class=\"source\" source=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" style=\"border-color:"
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + ";\">\r\n                <img src=\"images/logos/"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ".png\" />\r\n                <div class=\"source-desc\" style=\"background-color:"
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + ";\">"
    + alias2(alias1((depth0 != null ? depth0.desc : depth0), depth0))
    + "</div>\r\n            </div>\r\n        </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"sources\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();