var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mongoHelper = require('../mongoHelper');
var db = mongoHelper.getDb();

const secret_key = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";

router.use(express.json());

router.get('/', function(req, res) {
	let redirect = "";
	if (req.query.redirect) {
		redirect = req.query.redirect;
	}
	res.render('login', {'redirect': redirect});
});

//Authenticate user
router.post('/', async function(req, res) {
	let username = req.body.username;
	let password = req.body.password;
	let redirect;
	if (req.body.redirect) {
		redirect = req.body.redirect;
	}
	if (username == null || password == null) {
		console.log("Required input missing");
		res.render('login', {'redirect': redirect});
		return;
	}

	let user = await db.collection('Users').findOne({'username': username});
	if (user == null) {
		console.log("no user found");
		res.status(401).render('login', {'redirect': redirect});
		return;
	}
	let result = await bcrypt.compare(password, user.password);
	if (result) {
		console.log("nice");
		var web_token = jwt.sign({
			usr: username,
			exp: Math.floor(Date.now()/1000) + (2*60*60)
		}, secret_key, {});

		res.cookie('jwt', web_token);
		if (redirect) {
			res.redirect(redirect);	//fix redirect, add status codes
		}
		else {
			res.status(200).send("login successful");
		}
	}
	else {
		console.log("Username and password don't match");
		res.status(401).render('login', {'redirect': redirect});
	}
});

module.exports = router;