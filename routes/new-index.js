
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://jerocamdb:2268411@cluster0.02eed.mongodb.net/test?authSource=admin&replicaSet=atlas-dk7bbc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("moviesDB");
		dbo.collection("movies").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;