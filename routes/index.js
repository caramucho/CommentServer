var model = require('../model');
var Post = model.Post;

exports.index = function(req, res){
  Post.find({}, function(err, items){
    res.render('index', { title: 'Entry List', items: items});
    for (var i=0, size=items.length; i<size; ++i) {
      console.log("user="+items[i].user);
      console.log("url="+items[i].url);
      console.log("comment="+items[i].comment);
    }
  });
};

exports.form = function(req, res){
  res.render('form', { title: 'New Entry' })
};

exports.create = function(req, res){
  var newPost = new Post(req.body);
  newPost.save(function(err){
    if (err) {
      console.log(err);
      res.redirect('back');
    } 
    else {
      res.json( "success");
      // res.redirect('/');
      
    }
  });

};

exports.getComment = function(req, res){
 Post.find({}, function(err, items){
    if (err) {
      console.log(err);
      res.redirect('back');
    } 
    else {
      res.json(items);
      // res.redirect('/');
    }
  });
}