define([
  'underscore',
  'backbone'
], function(_, Backbone){

  return Backbone.Model.extend({
    urlRoot: "/images",
    defaults: {
      id: null,
      picture: "",
      title: "",
      tags: "",
      image_username: "",
      longitude: null,
      latitude: null,
      location_name: "",
      uploaded_at: null,
    }
  });
});