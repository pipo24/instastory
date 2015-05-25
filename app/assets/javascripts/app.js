define([
  'jquery',
  'underscore',
  'backbone',
  'routers/router',
  'routers/storiesRouter',
  ], function($, _, Backbone, Router, StoriesRouter){

    var initialize = function(){
      Router.initialize();
      StoriesRouter.initialize();
      Backbone.history.start();
    }

    return {
      initialize: initialize
    };
  });