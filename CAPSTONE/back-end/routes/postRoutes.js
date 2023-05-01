const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/images', // saves all uploaded images into public/images in back-end
    filename: (req, file, cb) => {
        console.log(req.body)
        cb(null, req.params.userId + '-' + file.originalname) // filename uses the user id and the original filename
    }, 
})

const upload = multer({ storage: storage }).single('image')

router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

router.get('/:userId', (req, res) => {
    Controllers.postController.getUserPosts(req, res);
})

router.post('/create/:userId', upload, (req, res) => { // multer middleware function uploads file when post request sent
    Controllers.postController.createPost(req, res)
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res)
})

module.exports = router;