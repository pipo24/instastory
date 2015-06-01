define([
  'underscore',
  'backbone'
], function(_, Backbone){

  return Backbone.Model.extend({
    url: "/users.json",
    defaults: {
      id: null,
      email: '',
      password: '',
      password_confirmation: '',
      fullname: '',    
      age: null,     
      gender: '',     
      profile_picture: '',
      stories: [],
    }
  });
});
