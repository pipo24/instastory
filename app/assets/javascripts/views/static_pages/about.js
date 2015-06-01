define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/static_pages/about.html'
  ], function($, _, Backbone, AboutTemplate) {

    var AboutView = Backbone.View.extend({
      el: 'main',
      render: function(data){
        var template = _.template(AboutTemplate);
        this.$el.html(template({}));
      }
    });

    return AboutView;
  });