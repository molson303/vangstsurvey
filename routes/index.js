var express = require('express');
var router = express.Router();
var Comments = require('../lib/queries')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
}),

router.post('/index', function(req, res, next){
  Comments.create(req.body).then(function(){
  res.redirect("/index/exit")
  })
}),

router.get('/index/exit', function(req, res, next){
  res.render('exit')
})



module.exports = router;
