define([
  'jquery',
  'underscore',
  'backbone',
  'routers/router',
  'routers/storiesRouter',
  'routers/imagesRouter',
  ], function($, _, Backbone, Router, StoriesRouter, ImagesRouter){

    var initialize = function(){
      Router.initialize();
      StoriesRouter.initialize();
      ImagesRouter.initialize();
      Backbone.history.start();
    }

    return {
      initialize: initialize
    };
  });