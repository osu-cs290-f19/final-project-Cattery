(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['catCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"cat-card\" id=\""
    + alias4(((helper = (helper = helpers.catID || (depth0 != null ? depth0.catID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catID","hash":{},"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":35}}}) : helper)))
    + "\" data-feed-stat=0 data-groom-stat=0 data-play-stat=0 data-is-adult=\"false\">\r\n  <div class=\"cat-name-holder\">\r\n    <h2 class=\"cat-name\">"
    + alias4(((helper = (helper = helpers.catName || (depth0 != null ? depth0.catName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catName","hash":{},"data":data,"loc":{"start":{"line":3,"column":25},"end":{"line":3,"column":36}}}) : helper)))
    + "</h2>\r\n  </div>\r\n  <div class=\"cat-image-holder\">\r\n    <img src=\""
    + alias4(((helper = (helper = helpers.catImgURL || (depth0 != null ? depth0.catImgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catImgURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":27}}}) : helper)))
    + "\" alt=\"Cat Image\">\r\n  </div>\r\n  <div class=\"cat-stats-holder\">\r\n    <div class=\"groom-stat stat-holder\">\r\n      <img src=\"images/brush.jpg\" alt=\"Groom Icon\" class=\"stat-icon\">\r\n      <p class=\"groom-stat-text\">0/5</p>\r\n    </div>\r\n    <div class=\"play-stat stat-holder\">\r\n      <img src=\"images/cat_toy.jpg\" alt=\"Play Icon\" class=\"stat-icon\">\r\n      <p class=\"play-stat-text\">0/5</p>\r\n    </div>\r\n    <div class=\"feed-stat stat-holder\">\r\n      <img src=\"images/bowl.jpg\" alt=\"Feed Icon\" class=\"stat-icon\">\r\n      <p class=\"feed-stat-text\">0/5</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();
