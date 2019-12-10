(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['catCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"cat-card\" id = \""
    + alias4(((helper = (helper = helpers.catID || (depth0 != null ? depth0.catID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catID","hash":{},"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":37}}}) : helper)))
    + "\" data-cat-num = \""
    + alias4(((helper = (helper = helpers.catNUM || (depth0 != null ? depth0.catNUM : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catNUM","hash":{},"data":data,"loc":{"start":{"line":1,"column":55},"end":{"line":1,"column":65}}}) : helper)))
    + "\" data-feed-stat = \""
    + alias4(((helper = (helper = helpers.feedStat || (depth0 != null ? depth0.feedStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedStat","hash":{},"data":data,"loc":{"start":{"line":1,"column":85},"end":{"line":1,"column":97}}}) : helper)))
    + "\" data-groom-stat= \""
    + alias4(((helper = (helper = helpers.groomStat || (depth0 != null ? depth0.groomStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groomStat","hash":{},"data":data,"loc":{"start":{"line":1,"column":117},"end":{"line":1,"column":130}}}) : helper)))
    + "\" data-play-stat= \""
    + alias4(((helper = (helper = helpers.playStat || (depth0 != null ? depth0.playStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playStat","hash":{},"data":data,"loc":{"start":{"line":1,"column":149},"end":{"line":1,"column":161}}}) : helper)))
    + "\" data-total = \""
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data,"loc":{"start":{"line":1,"column":177},"end":{"line":1,"column":186}}}) : helper)))
    + "\" data-is-adult= \""
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data,"loc":{"start":{"line":1,"column":204},"end":{"line":1,"column":211}}}) : helper)))
    + "\" data-color = \""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":1,"column":227},"end":{"line":1,"column":236}}}) : helper)))
    + "\">\n  <div class=\"cat-name-holder\">\n    <h2 class = \"cat-name\">"
    + alias4(((helper = (helper = helpers.catName || (depth0 != null ? depth0.catName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catName","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":38}}}) : helper)))
    + "</h2>\n  </div>\n  <div class=\"cat-image-holder\">\n    <img class = \"catImg\" src= \""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":44}}}) : helper)))
    + "\" alt=\"Cat Image\">\n  </div>\n\n  <div class=\"cat-stats-holder\">\n    <div class=\"groom-stat stat-holder\">\n      <img src=\"images/brush.jpg\" alt=\"Groom Icon\" class=\"stat-icon\">\n      <p class=\"groom-stat-text\">"
    + alias4(((helper = (helper = helpers.groomStat || (depth0 != null ? depth0.groomStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groomStat","hash":{},"data":data,"loc":{"start":{"line":12,"column":33},"end":{"line":12,"column":46}}}) : helper)))
    + "/2</p>\n    </div>\n\n    <div class=\"feed-stat stat-holder\">\n      <img src=\"images/bowl.jpg\" alt=\"Feed Icon\" class=\"stat-icon\">\n      <p class=\"feed-stat-text\"> "
    + alias4(((helper = (helper = helpers.feedStat || (depth0 != null ? depth0.feedStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedStat","hash":{},"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":45}}}) : helper)))
    + "/2</p>\n    </div>\n\n    <div class=\"play-stat stat-holder\">\n      <img src=\"images/cat_toy.jpg\" alt=\"Play Icon\" class=\"stat-icon\">\n      <p class=\"play-stat-text\"> "
    + alias4(((helper = (helper = helpers.playStat || (depth0 != null ? depth0.playStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playStat","hash":{},"data":data,"loc":{"start":{"line":22,"column":33},"end":{"line":22,"column":45}}}) : helper)))
    + "/2</p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();