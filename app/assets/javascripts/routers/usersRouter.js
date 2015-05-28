define([
  'backbone',
  'views/users/index',
  'views/users/show',
  ], function(Backbone, UsersIndexView, UsersShowView){

    var usersRouter = Backbone.Router.extend({
      routes: {
        'users'          : 'usersIndex',
        'users/:id'      : 'usersShow',
      }
    });

    var initialize = function() {

      var router = new usersRouter;

      router.on('route:usersIndex', function(){
        new UsersIndexView();
      });

      router.on('route:usersShow', function(id){
        new UsersShowView(id);
      });

    }

    return {
      initialize: initialize
    }
  });