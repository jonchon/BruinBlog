var express = require('express');
var router = express.Router();
var commonmark = require('commonmark');
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var mongoHelper = require('../mongoHelper');

var db = mongoHelper.getDb();

//Displays public view of 5 of user's blogs posts, with offset of start
router.get('/:username', async function(req, res, next) {
		
		let start = 1;
		if (req.query.start) {
			start = parseInt(req.query.start);
		}
		if (start < 1) {
			start = 1;
		}
		//first finds user from Users collection
		let exists = await db.collection('Users').findOne({'username': req.params.username});
		if (exists == null) {
			res.sendStatus(404);
			return;
		}

		//find all 6 posts given the username
		//6th post used as parameter for 'start' offset in the next button
		let docs = await db.collection('Posts')
			.find({'username':req.params.username,'postid':{$gte: start}})
			.sort({'postid': 1})
			.limit(6)
			.toArray();
		console.log(docs)

		//prepares array of posts to pass into the template
		for (let i = 0; i < docs.length; i++) {
			if (docs[i].body == null) {
				docs[i].body = "";
			}
			if (docs[i].title == null) {
				docs[i].title = "";
			}
			let body_parse = reader.parse(docs[i].body.toString());
			let body = writer.render(body_parse);
			let title_parse = reader.parse(docs[i].title.toString());
			let title = writer.render(title_parse);

			docs[i].body = body;
			docs[i].title = title;
		}
		res.render('blogList', { 'username': req.params.username,'start':start, 'docs':docs });	
  	}
);

//Gets single post to display and pass to template
router.get('/:username/:postid', async function (req,res,next) {
	let postid = parseInt(req.params.postid);
	let username = req.params.username;

	let exists = await db.collection('Users').findOne({'username': req.params.username});
	if (exists == null) {
		res.sendStatus(404);
		return;
	}
	db.collection('Posts').findOne({'postid': postid, 'username': username}, function (err, post) {
		if (err) {
			return console.log("error: " + err);
		}
		if (post == null) {
			res.sendStatus(404);
			return;
		}

		if (post.body == null) {
			post.body = "";
		}
		if (post.title == null) {
			post.title = "";
		}
		let body_parse = reader.parse(post.body.toString());
		let body = writer.render(body_parse);

		let title_parse = reader.parse(post.title.toString());
		let title = writer.render(title_parse);

		res.render('blogPost', {'username': username, 'postid': postid, 'body': body, 'title': title});
	})
});


module.exports = router;