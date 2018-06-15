const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
	res.send('');
});

router.post('/', (req, res, next) => {
	res.json(req.body);
});

router.get('/add', (req, res, next) => {
	res.send(addPage());
});


module.exports = router;