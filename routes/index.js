var projects = require('../projects.json');

exports.viewGrid = function(req, res){
  	projects.showGrid = true;
  	res.render('index', projects);
};

exports.view = function(req, res){
  	projects.showGrid = false;
  	res.render('index', projects);
};