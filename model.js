//const MONGO_URL = process.env.MONGOHQ_URL;
var mongoose = require('mongoose');
//var db = mongoose.connect(MONGO_URL);
var db = mongoose.connect('mongodb://localhost/firstapp');

function validator(v) {
	return v.length > 0;
}1

var Post = new mongoose.Schema({
	user   : { type: String, validate: [validator, "Empty Error"] },
	url   : { type: String, validate: [validator, "Empty Error"] },
	comment   : { type: String, validate: [validator, "Empty Error"] },
	created: { type: Date, default: Date.now }
});

exports.Post = db.model('Post', Post);
