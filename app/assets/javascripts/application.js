require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
    cookie: 'lib/jquery.cookie',
    bourbon: 'lib/modules/bourbon'
  }
});

require([
  'app'
], function(App){
  App.initialize();
});