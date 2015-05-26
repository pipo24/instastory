define([
  'jquery',
  'underscore',
  'backbone',
  'routers/router',
  'routers/storiesRouter',
  'routers/imagesRouter',
  'routers/usersRouter',
  ], function($, _, Backbone, Router, StoriesRouter, ImagesRouter, UsersRouter){

    var initialize = function(){
      Router.initialize();
      UsersRouter.initialize();
      StoriesRouter.initialize();
      ImagesRouter.initialize();
      Backbone.history.start();
    }

    return {
      initialize: initialize
    };
  });