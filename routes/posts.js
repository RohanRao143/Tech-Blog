const express = require('express');
const router =express.Router();
const Posts =require('../models/posts');

router.post('/createPost',(req,res)=>{
    var newPost = new Posts({title:req.body.title,
        categories:req.body.categories,
    content:req.body.content});
    newPost.save((err)=>{
        if(err){
            console.log(err)
        }
        console.log("saved successfully")
    });
    console.log(res)
    res.json({success:true})
});

router.get('/retrieve',(req,res)=>{
   Posts.find({},(err,posts)=>{
       if(err){
           res.status(500).json({message:'cannot retrieve posts'})
       }
       else{
           res.json({posts})
       }
   })
});

module.exports = router;