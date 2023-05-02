import React, { useState, useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, CardActions } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function CommentDialog(props) {

    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState(''); // adding a comment
    const [comments, setComments] = useState([]); // displaying comments
    const { currentUser } = useContext(UserContext);

    useEffect(() => {

        axios.get(`http://localhost:8001/api/comments/${props.postId}`)
            .then(response => {
                // setting initial comments from server
                setComments(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = () => {

        let commentDetails = {
            userId: currentUser.id,
            postId: props.postId,
            comment: comment
        };

        console.log(commentDetails);

        axios.post('http://localhost:8001/api/comments/create', commentDetails)
            .then(response => {
                console.log(response.data);
                setComment(''); // clears comment text after submitting
                setComments([...comments, {...response.data.data, username: currentUser.username}]) //adds new comment to state so it shows on screen
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleDelete = (commentId) => {

        axios.delete(`http://localhost:8001/api/comments/${commentId}`)
            .then(response => {
                console.log(response.data);
                // removing deleted comment from rendered list
                setComments(comments.filter(comment => comment.id !== commentId));
                setCurrentUserComments(currentUserComments.filter(comment => comment.id !== commentId));
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (

        <div>
            <CardActions>
                <Button className="roboto-font" onClick={handleOpen} size="small" sx={{ color: '#6EA15E' }}>Comments</Button>
            </CardActions>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
            >
                <DialogTitle className="roboto-font">Comments</DialogTitle>
                <DialogContent>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            <DialogContentText  className="roboto-font">
                                <b>{comment.username}</b>: {comment.comment}
                            </DialogContentText>
                            {currentUser.id === comment.userId && (
                                <Button
                                    className="roboto-font"
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    sx={{
                                        borderColor: '#f44336',
                                        color: '#f44336',
                                        ':hover': {
                                            backgroundColor: '#f44336',
                                            color: '#ffffff',
                                            borderColor: '#d32f2f',
                                        }
                                    }}
                                    onClick={() => handleDelete(comment.id)}
                                >
                                    Delete
                                </Button>
                            )}
                        </div>    
                    ))}    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Add comment"
                        type="text"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ style: { fontFamily: 'Roboto Condensed, sans-serif' } }}
                        sx={{ input: { fontFamily: 'Roboto Condensed, sans-serif' } }}
                        value={comment}
                        onChange={handleCommentChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSubmit}
                        className="roboto-font"
                        variant="contained"
                        sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, m: 0.5 }}
                    >
                        Add comment
                    </Button>
                    <Button
                        className="roboto-font"
                        onClick={handleClose}
                        variant="contained"
                        sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, m: 0.5 }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CommentDialog;
