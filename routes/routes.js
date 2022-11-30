const express = require('express');
//const { Model } = require('mongoose');
const router = express.Router();
const Model = require('../module/module');

// post Method

router.post('/createPost', async (req,res)=>{
    //res.send("Post created");
    const newPost = new Model({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content,

    })
    try{
        const result = await newPost.save();
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

// get

router.get('/getAllPost', async (req,res)=>{
    //res.send("All POST DATA :-");

    try{
        const result = await Model.find();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({message : error.message});
    }
})

router.get('/getPost/:id',(req,res)=>{
    const id = req.params.id
    res.send(`post with id ${id}`);
})

//Patch
router.patch('/editPost/:id',(req,res)=>{
    const id = req.params.id
    res.send(`post with id ${id}`);
})

//delete
router.delete('/deletePost/:id',(req,res)=>{
    const id = req.params.id
    res.send(`post with id ${id}`);
})

module.exports = router;