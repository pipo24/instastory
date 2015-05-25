define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/application.html'
], function($, _, Backbone, ApplicationTemplate) {

  return Backbone.View.extend({
    el: "body",
    render: function() {
      var template = _.template(ApplicationTemplate);
      this.$el.html(template());
      return this.el;
    }
  });
});