const orderRoute = require('express').Router();
const all = require('./all');
const single = require('./single');
const status = require('./status');
const add = require('./add');
const findObject = require('../../utils/findObject');

orderRoute.get('/:id', single);
orderRoute.get('/status/:status', status);
orderRoute.post('/add', add);

orderRoute.param('id', findObject('order'));
orderRoute.param('status', findObject('order', 'status'));

orderRoute.get('/', all);



module.exports = orderRoute;