'use strict';

var controller = require('../controller.js')
/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Game, app, auth, database) {

  app.get('/api/game/insert', controller.insert_new);
  app.get('/api/game/find_top_three', controller.find_top_three);
  app.get('/api/game/send_mail', controller.send_mail);

  app.get('/api/game/example/render', function(req, res, next) {
    Game.render('index', {
      package: 'game'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
