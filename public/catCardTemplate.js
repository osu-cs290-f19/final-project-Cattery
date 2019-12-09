(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['catCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"cat-card\" data-cat-num =\""
    + alias4(((helper = (helper = helpers.catNUM || (depth0 != null ? depth0.catNUM : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catNUM","hash":{},"data":data,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":47}}}) : helper)))
    + "\" data-feed-stat="
    + alias4(((helper = (helper = helpers.feedStat || (depth0 != null ? depth0.feedStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedStat","hash":{},"data":data,"loc":{"start":{"line":1,"column":64},"end":{"line":1,"column":76}}}) : helper)))
    + " data-groom-stat="
    + alias4(((helper = (helper = helpers.groomStat || (depth0 != null ? depth0.groomStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groomStat","hash":{},"data":data,"loc":{"start":{"line":1,"column":93},"end":{"line":1,"column":106}}}) : helper)))
    + " data-play-stat="
    + alias4(((helper = (helper = helpers.playStat || (depth0 != null ? depth0.playStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playStat","hash":{},"data":data,"loc":{"start":{"line":1,"column":122},"end":{"line":1,"column":134}}}) : helper)))
    + " data-total = 0 data-is-adult="
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data,"loc":{"start":{"line":1,"column":164},"end":{"line":1,"column":171}}}) : helper)))
    + " data-color = "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":1,"column":185},"end":{"line":1,"column":194}}}) : helper)))
    + ">\n  <div class=\"cat-name-holder\">\n    <h2 class=\"cat-name\">"
    + alias4(((helper = (helper = helpers.catName || (depth0 != null ? depth0.catName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catName","hash":{},"data":data,"loc":{"start":{"line":3,"column":25},"end":{"line":3,"column":36}}}) : helper)))
    + "</h2>\n  </div>\n  <div class=\"cat-image-holder\">\n    <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":26}}}) : helper)))
    + "\" alt=\"Cat Image\">\n  </div>\n  <div class=\"cat-stats-holder\">\n    <div class=\"groom-stat stat-holder\">\n      <img src=\"images/brush.jpg\" alt=\"Groom Icon\" class=\"stat-icon\">\n      <p class=\"groom-stat-text\">"
    + alias4(((helper = (helper = helpers.groomStat || (depth0 != null ? depth0.groomStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groomStat","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":46}}}) : helper)))
    + "/2</p>\n    </div>\n    <div class=\"play-stat stat-holder\">\n      <img src=\"images/cat_toy.jpg\" alt=\"Play Icon\" class=\"stat-icon\">\n      <p class=\"play-stat-text\"> "
    + alias4(((helper = (helper = helpers.playStat || (depth0 != null ? depth0.playStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playStat","hash":{},"data":data,"loc":{"start":{"line":15,"column":33},"end":{"line":15,"column":45}}}) : helper)))
    + "/2</p>\n    </div>\n    <div class=\"feed-stat stat-holder\">\n      <img src=\"images/bowl.jpg\" alt=\"Feed Icon\" class=\"stat-icon\">\n      <p class=\"feed-stat-text\"> "
    + alias4(((helper = (helper = helpers.feedStat || (depth0 != null ? depth0.feedStat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedStat","hash":{},"data":data,"loc":{"start":{"line":19,"column":33},"end":{"line":19,"column":45}}}) : helper)))
    + "/2</p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();