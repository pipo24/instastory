define([
  'underscore',
  'backbone',
  'models/story'
], function(_, Backbone, Story){

  return Backbone.Collection.extend({
    model: Story,
    url: "/stories.json"
  });

});