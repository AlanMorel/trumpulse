(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['facebook'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\"https://www.facebook.com/DonaldTrump/posts/"
    + alias2(alias1((depth0 != null ? depth0.post_id : depth0), depth0))
    + "\" class=\"post-a\">\r\n                <div class=\"post\">\r\n                    <div class=\"post-content\">\r\n                        <img src=\"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/16174753_10158517450380725_87513729581056003_n.jpg?oh=e284f8149c593175a6154b64b571a183&oe=5934E77A\" class=\"facebook-profile\">\r\n                        <span class=\"post-text\">"
    + alias2(alias1((depth0 != null ? depth0.message : depth0), depth0))
    + "</span>\r\n                    </div>\r\n                    <div class=\"post-info\">"
    + alias2(alias1((depth0 != null ? depth0.timestamp : depth0), depth0))
    + "</div>\r\n                </div>\r\n            </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"posts-container\">\r\n    <div class=\"posts\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});
})();