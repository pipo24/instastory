define([
  'jquery',
  'underscore',
  'backbone',
  'views/user_menu',
  'text!templates/application.html'
  ], function($, _, Backbone, UserMenuView, ApplicationTemplate) {

    return Backbone.View.extend({
      el: "body",

      initialize: function(session) {
        this.user = session;
      },
      render: function() {
        var template = _.template(ApplicationTemplate);
        this.$el.html(template());

        // render User Menu
        var userMenuView = new UserMenuView(this.user);
        this.$('#user-menu').html(userMenuView.render().el);

        return this.el;    }
      });
  });