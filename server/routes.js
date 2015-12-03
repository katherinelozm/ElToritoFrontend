var homeController = require('./controllers/homeController');
var userController = require('./controllers/userController');
var authController = require('./controllers/authController');

exports.endpoints = [
	{method: 'GET', path: '/{param*}', config: homeController.home},
	{method: 'POST', path: '/v1/register', config: userController.createUser},
	{method: 'GET', path: '/v1/users', config: userController.getUsers},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
