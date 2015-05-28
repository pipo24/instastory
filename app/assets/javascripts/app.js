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
      console.log("1");
      Router.initialize();
      StoriesRouter.initialize();
      ImagesRouter.initialize();
      UsersRouter.initialize();
      Backbone.history.start();
    }

    return {
      initialize: initialize
    };
  });