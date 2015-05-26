define([
  'jquery',
  'underscore',
  'backbone',
  'models/user_session',
  'text!templates/users/sign_in.html',
], function($, _, Backbone, UserSession, UserSignInTemplate) {
  return Backbone.View.extend({
    el: "main",
    render: function() {
      var template = _.template(UserSignInTemplate);
      this.$el.html(template());
      return this.el;
    }
  })
});