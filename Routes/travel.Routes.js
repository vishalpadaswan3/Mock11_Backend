const express = require('express');
const { postModel } = require('../Model/post.Model');


const postRouter = express.Router();

postRouter.post('/api/post', async (req, res) => {
    try {
        let { name, email, destination, travellers, budget } = req.body;
        let post = new postModel({ name, email, destination, travellers, budget });
        await post.save();
        res.status(200).json({ message: "Post Added Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

postRouter.get('/api/retrieve', async (req, res) => {

    try {
        let posts = await postModel.find();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

postRouter.delete('/api/delete/:id', async (req, res) => {
    try {
        let { id } = req.params;
        await postModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Post Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

postRouter.get('/api/filter/:destination', async (req, res) => {
    let destination = req.params.destination;
    try {
        if (destination == "All") {
            let posts = await postModel.find();
            return res.status(200).json({ posts });
        }
        let posts = await postModel.find({ destination });
        res.status(200).json({ posts });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

postRouter.get('/api/sort/:type', async (req, res) => {
    let type = req.params.type;
    try {
        if (type == "HL") {
            let posts = await postModel.find().sort({ budget: -1 });
            res.status(200).json({ posts });
        } else if (type == "LH") {
            let posts = await postModel.find().sort({ budget: 1 });
            res.status(200).json({ posts });
        } else if("All") {
            let posts = await postModel.find();
            res.status(200).json({ posts });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = { postRouter };