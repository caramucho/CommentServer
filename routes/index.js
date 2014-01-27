var model = require('../model');
var Post = model.Post;
var url=require("url");
var querystring=require("querystring");

exports.index = function(req, res){
  res.render('index', { title: 'Entry List'});
  // Post.find({url:"http://www.baidu.com/"}, function(err, items){
  //   res.render('index', { title: 'Entry List', items: items});
  //   for (var i=0, size=items.length; i<size; ++i) {
  //     console.log("point="+items[i].point[0]+items[i].point[1]);
  //     console.log("url="+items[i].url);
  //     console.log("comment="+items[i].content);
  //     console.log("selector="+items[i].selector);
  //   }
  // });
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
      res.json("success");
      // res.redirect('/');
    }
  });
};

exports.getComment = function(req, res){
  var query=url.parse(req.url).query;
  var param=querystring.parse(query);
  console.log(param.url);

  Post.find({url:param.url}, function(err, items){
    for (var i=0, size=items.length; i<size; ++i) {
      console.log("point="+items[i].point[0]+items[i].point[1]);
      console.log("url="+items[i].url);
      console.log("comment="+items[i].content);
      console.log("selector="+items[i].selector);
    }
  });

  res.json({});
};
