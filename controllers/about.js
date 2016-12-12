'use strict';

/**
 * About Controller
 */

module.exports.controller = function (app) {

  /**
   * GET /about
   * View an overview of the project
   */

  app.get('/about', function (req, res) {
    res.render('about/about', {
      url: req.url
    });
  });

  /**
   * GET /about/team
   * View an overview of the team members
   */

  app.get('/about/team', function (req, res) {
    res.render('about/team', {
	url: req.url,
	team: require('../views/about/team.json')
    });
  });

};
