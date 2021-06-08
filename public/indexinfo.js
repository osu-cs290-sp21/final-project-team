(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <main class=\"recipe-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"recipeData") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":35,"column":21}}})) != null ? stack1 : "")
    + "        </main>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"insertRecipe"),depth0,{"name":"insertRecipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"error"),depth0,{"name":"error","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "      <button type=\"button\" id=\"add-recipe-button\"><i class=\"fas fa-utensils add-button\"></i></button>\r\n      \r\n      <div id=\"modal-background\" class=\"hidden\"></div>\r\n      <div id=\"add-recipe-modal\" class=\"hidden\"></div>\r\n        <div class=\"modal-box\">\r\n\r\n          <div class=\"modal-header\">\r\n            <!-- Input recipe image -->\r\n            <div class=\"add-recipe-element\">\r\n              <label for=\"recipe-image-input\">Photo</label>\r\n              <input type=\"file\" id=\"recipe-image-input\" accept=\"image/*\">\r\n            </div>\r\n            <!-- Input recipe title-->\r\n            <div class=\"add-recipe-element\">\r\n              <label for=\"recipe-title-input\">Title</label>\r\n              <textarea id=\"recipe-title-input\"></textarea>\r\n            </div>\r\n            <!-- Input recipe time-->\r\n            <div class=\"add-recipe-element\">\r\n              <label for=\"recipe-time-input\">Cooking Time</label>\r\n              <textarea id=\"recipe-title-input\"></textarea>\r\n            </div>\r\n            <!-- Input recipe description -->\r\n            <div class=\"add-recipe-element\">\r\n              <label for=\"recipe-description-input\">Short Description</label>\r\n              <textarea id=\"recipe-description-input\"></textarea>\r\n            </div>\r\n            <!-- Input recipe ingredients & measurements -->\r\n            <div class=\"add-recipe-element\">\r\n              <label for=\"recipe-ingredient-input\">Ingredients & Measurements</label>\r\n              <textarea id=\"recipe-ingredient-input\"></textarea>\r\n            </div>\r\n            <!-- Input recipe directions -->\r\n            <div class=\"add-recipe element\">\r\n              <label for=\"recipe-direction-input\">Cooking Directions</label>\r\n              <textarea id=\"recipe-direction-input\"></textarea>\r\n            </div>\r\n         \r\n          </div>\r\n\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <title>GROUP 27 RECIPE APP</title>\r\n    <link href=\"https://fonts.googleapis.com/css?family=Poppins\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.3/css/all.css\" crossorigin=\"anonymous\">\r\n    <link rel=\"stylesheet\" href=\"/main-style.css\" media=\"screen\">\r\n  </head>\r\n\r\n  <body>\r\n\r\n    <header>\r\n      <!-- Website Title -->\r\n      <a href = \"#\"><h1 class =\"site-title\"><i class=\"fas fa-utensils\"></i>GROUP 27 RECIPE APP</h1></a>\r\n      \r\n      <!-- Search bar -->\r\n      <nav class=\"navbar\">\r\n        <ul class=\"navbar-list\">\r\n          <li>\r\n            <input type=\"text\" id=\"search-bar-input\" placeholder=\"Search for recipes...\">\r\n            <button type=\"button\" id =\"search-bar-button\"><i class=\"fas fa-search\"></i></button>\r\n          </li>\r\n        </ul>\r\n        \r\n      </nav>\r\n\r\n    </header>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"print") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":39,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n     </main> \r\n\r\n      <!-- New recipe button -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"printButton") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":87,"column":11}}})) != null ? stack1 : "")
    + "\r\n</html>";
},"usePartial":true,"useData":true});
})();