//jslint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash')
const homeStartingContent = "In a world filled with constant distractions and fleeting moments, I found solace and clarity within the pages of my daily journal. It became a sacred space, where the ink flowed freely, capturing my thoughts, emotions, and reflections. Each entry became a time capsule, preserving my experiences and serving as a compass on my journey of self-discovery. In this blog post, I invite you to join me on an intimate exploration of my daily journal, as we unveil the hidden treasures and profound revelations found within its pages.";
const aboutContent = "Welcome to my website! I'm Dinesh, and I'm thrilled to have you here.In this blog post, I invite you to join me on an intimate exploration of my daily journal, as we unveil the hidden treasures and profound revelations found within its pages.Thank you for visiting my website."
const contactContent = "Email : dineshkrishna0456@gmail.com"
const app = express();
var posts =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function(req,res){
  res.render('home',{para:homeStartingContent
    ,content:posts
  });
})
app.get('/about',function(req,res){
  res.render('about',{ainfo:aboutContent});
})
app.get('/contact',function(req,res){
  res.render('contact',{cinfo:contactContent});
})
app.get('/compose',function(req,res){
  res.render('compose');
})
app.post('/compose',function(req,res){
  let Post ={
    title_:req.body.post_title,
    body_:req.body.post_body,
  };
  posts.push(Post);
  res.redirect('/');
})
app.get('/posts/:Postname',function(req,res){
  posts.forEach(function(post){
    if(_.lowerCase(post.title_)===_.lowerCase(req.params.Postname)){
      // console.log("Match found");
      res.render('PosT',{
        title:post.title_,
        content:post.body_
      });   
    }
  })
})













app.listen(3000, function() {
  console.log("Server started on port 3000");
});
