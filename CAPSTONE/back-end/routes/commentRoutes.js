const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

router.post('/create', (req, res) => {
    console.log(req.body.UserID)
    console.log('test')
    Controllers.commentController.createComments(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res)
})

module.exports = router;