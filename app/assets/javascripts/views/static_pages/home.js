define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/static_pages/home.html'
  ], function($, _, Backbone, HomeTemplate) {

    var HomeView = Backbone.View.extend({
      el: 'main',
      render: function(data){
        var template = _.template(HomeTemplate);
        this.$el.html(template({}));
      }
    });

    return HomeView;
  });