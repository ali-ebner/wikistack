const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models")
const layout = require("../views/layout")
const wikiPage = require("../views/wikipage");
const main = require("../views/main");

router.get('/', async (req, res, next) => {
	const pages = await Page.findAll();
	console.log('here', pages);
	res.send(main(pages));
});

router.post('/', async (req, res, next) => {
	const page = new Page({
		title: req.body.title,
		content: req.body.content
	})
	try{
		await page.save()
		res.redirect(`/wiki/${page.slug}`)
	}catch(error){
		next(error)
	}
	console.log(page);
});


router.get('/add', (req, res, next) => {
	res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
	console.log('here');
  try{
  const page = await Page.findOne({
  	where: { slug: req.params.slug }
  });
  console.log(page);
  res.send(wikiPage(page));
} catch(error){next(error)}
});


module.exports = router;
