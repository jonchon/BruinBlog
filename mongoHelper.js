const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const mongo_url = 'mongodb://user:password1@ds139944.mlab.com:39944/heroku_fcvclf7m'
let db;

//Establishes single connection for back-end to communicate to Mongo database with
module.exports = {
	getDbConnection: function(callback) {
		MongoClient.connect(mongo_url, function (err, database) {
			assert.equal(null, err);
			console.log("Connected to MongoDB");
			db = database.db("BlogServer");
			return callback(err);
		});
	},
	getDb: function() {
		return db;
	}
}
