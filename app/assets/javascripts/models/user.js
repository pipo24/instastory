define([
  'underscore',
  'backbone'
], function(_, Backbone){

  return Backbone.Model.extend({
    urlRoot: "/users",
    defaults: {
      id: null,
      email: '',
      fullname: '',
      age: null,
      gender: '',
      profile_picture: '',
      nickname: '',
      bio: '',
      profile_picture: '',
      stories: [],
    }
  });
});