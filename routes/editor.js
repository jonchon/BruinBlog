var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const secret='C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';

function validateCookie(req,res,next){
	let token = req.cookies['jwt'];
	let redirect = "/login?redirect=/editor/";
	if(!token){
		 return res.redirect(redirect)
	}

	try {
		let decoded = jwt.verify(token,secret);
		jwtUsername = decoded.usr;
	} catch(err){
		console.log(err);
		 return res.redirect(redirect)
	}

	 return next()
}




router.get('/*',function(req,res,next) {
	validateCookie(req,res,next);
})



module.exports = router;
