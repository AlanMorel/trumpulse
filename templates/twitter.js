(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['twitter'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\"https://twitter.com/realDonaldTrump/status/"
    + alias2(alias1((depth0 != null ? depth0.id_str : depth0), depth0))
    + "\" class=\"tweet-a\">\r\n                <div class=\"tweet\">\r\n                    <div class=\"tweet-content\">\r\n                        <img src=\"https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg\" class=\"twitter-profile\">\r\n                        <span class=\"tweet-text\">"
    + alias2(alias1((depth0 != null ? depth0.full_text : depth0), depth0))
    + "</span>\r\n                    </div>\r\n                    <div class=\"tweet-info\">\r\n                        <span class=\"likes\">"
    + alias2(alias1((depth0 != null ? depth0.favorite_count : depth0), depth0))
    + " Likes</span>\r\n                        <span class=\"retweets\">"
    + alias2(alias1((depth0 != null ? depth0.retweet_count : depth0), depth0))
    + " Retweets</span>\r\n                        <span class=\"timestamp\">"
    + alias2(alias1((depth0 != null ? depth0.timestamp : depth0), depth0))
    + "</span>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"tweets-container\">\r\n    <div class=\"tweets\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
})();