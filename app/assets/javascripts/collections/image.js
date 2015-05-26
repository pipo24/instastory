define([
  'underscore',
  'backbone',
  'models/image'
], function(_, Backbone, Image){

  return Backbone.Collection.extend({
    model: Image,
    url: "/images.json"
  });

});