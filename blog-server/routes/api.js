var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoHelper = require('../mongoHelper');

var db = mongoHelper.getDb();
const secret='C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';

//Used to validate JWT with the given username when an api request is made
function validateCookie(req,username){
	let token = req.cookies['jwt'];
	if(!token){
		return false;
	}
	let jwtUsername;
	try {
		let decoded = jwt.verify(token,secret);
		jwtUsername = decoded.usr;
	} catch(err){
		console.log(err);
		return false;
	}
	if (jwtUsername!=username){
		return false;
	}
	return true;
}

//returns posts of username
router.get('/:username', async function(req,res,next) {
	let username = req.params.username;

	if(!validateCookie(req,username)){
		res.sendStatus(401);
		return;
	}
	let docs = await db.collection('Posts').find({'username':username}).toArray();
	res.status(200).json(docs);
});

//returns post with given postid and username
router.get('/:username/:postid', async function(req,res,next){
	let username = req.params.username;
	if(!validateCookie(req,username)){
		res.sendStatus(401);
		return;
	}

	let postid = parseInt(req.params.postid);
	let post = await db.collection('Posts').findOne({'postid': postid, 'username': username});

	if(post==null){
		res.sendStatus(404);
	}
	else{
		res.status(200).json(post);
	}
});

//Creates post of given postid and username
//only creates if req body contains a title and body in json
router.post('/:username/:postid',async function(req,res,next){
	if(!req.is('json')){
		res.sendStatus(400);
		return;
	}
	let username = req.params.username;

	if(!validateCookie(req,username)){
		res.sendStatus(401);
		return;
	}

	let postid = parseInt(req.params.postid);
	let title= req.body.title;
	let body = req.body.body;

	if (title==null || body == null){
		res.sendStatus(400);
		return;
	}

	let createdTime = (new Date).getTime();
	let modifiedTime = (new Date).getTime();
	let newPost={
		'username': username,
		'postid': postid,
		'title' : title,
		'body' : body,
		'created' : createdTime,
		'modified' : modifiedTime
	}
	
	let post = await db.collection('Posts').findOne({'postid': postid, 'username': username});
	if (post != null){
		res.sendStatus(400);
	}
	else {
		await db.collection('Posts').insertOne(newPost);
		res.sendStatus(201);
	}
});

//Updates post of given postid and username
//only updates if req body contains a title and body in json
router.put('/:username/:postid', async function(req,res,next){
	if(!req.is('json')){
		res.sendStatus(400);
		return;
	}
	let username = req.params.username;
	if(!validateCookie(req,username)){
		res.sendStatus(401);
		return;
	}
	let postid = parseInt(req.params.postid);
	let title= req.body.title;
	let body = req.body.body;

	if (title==null || body == null){
		res.sendStatus(400);
		return;
	}

	let post = await db.collection('Posts').findOne({'postid': postid, 'username': username});
	if (post == null){
		res.sendStatus(400);
	}
	else{
		await db.collection('Posts')
			.update({'username':username,'postid':postid}, {$set: {'title':title,'body':body,'modified': (new Date).getTime()}});
		res.sendStatus(200);
	}
});

//Deletes post given username and postid
router.delete('/:username/:postid',async function(req,res,next){
	let username = req.params.username;

	if(!validateCookie(req,username)){
		res.sendStatus(401);
		return;
	}

	let postid = parseInt(req.params.postid);

	let post = await db.collection('Posts').findOne({'postid': postid, 'username': username});
	if (post == null){
		res.sendStatus(400);
	}
	else{
		await db.collection('Posts').remove({'username':username,'postid':postid});
		res.sendStatus(204);
	}
})
module.exports = router;