var express = require('express');
var app = express();
const axios = require('axios');
const orderApi = 'https://petshop-api.herokuapp.com/api/v1/';

app.get('/order/:id', function (req, res) {
	axios.get(orderApi + 'order/' + req.params.id)
		.then(response => res.json(response.data))
		.catch(error => res.json(error));
});
app.put('/order/:id', function (req, res) {
	axios.put(orderApi + 'order/' + req.params.id)
		.then(response => res.json(response.data))
		.catch(error => res.json(error));
});
app.post('/order', function (req, res) {
	axios.post(orderApi + 'order', req.body)
		.then(response => res.json(response.data))
		.catch(error => res.json(error));
});

app.get('/report/customer/:id', function (req, res) {
	axios.get(orderApi + '/report/customer/' + req.params.id)
		.then(response => res.json(response.data))
		.catch(error => res.json(error));
});
app.get('/report/product/:id', function (req, res) {
	axios.get(orderApi + '/report/product/' + req.params.id)
		.then(response => res.json(response.data))
		.catch(error => res.json(error));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});