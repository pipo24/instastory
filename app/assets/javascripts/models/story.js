define([
  'underscore',
  'backbone'
], function(_, Backbone){

  return Backbone.Model.extend({
    urlRoot: "/stories",
    defaults: {
      id: null,
      title: "",
      description: "",
      user: "",
      images: "",
    }
  });
});