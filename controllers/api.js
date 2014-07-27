var User = require('../models/User');
var async = require('async');
var request = require('request');
var Github = require('github-api');
var Y = require('yui/yql');
var _ = require('lodash');

/**
 * GET /api
 * List of API examples.
 */

exports.getApi = function(req, res) {
  res.render('api/index', {
    title: 'API Examples'
  });
};

/**
 * GET /api/github
 * GitHub API Example.
 */
exports.getGithub = function(req, res) {
  var token = _.find(req.user.tokens, { kind: 'github' });
  var github = new Github({ token: token.accessToken });
  var repo = github.getRepo('sahat', 'requirejs-library');
  repo.show(function(err, repo) {
    res.render('api/github', {
      title: 'GitHub API',
      repo: repo
    });
  });

};
