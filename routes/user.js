const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.send('got to GET');
});

router.post('/', (req, res, next) => {
	res.send('post')
});

router.get('/add', (req, res, next) => {
	res.send('Get Add')
});


module.exports = router;