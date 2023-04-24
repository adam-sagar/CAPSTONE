import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { Grid } from '@mui/material';

function Post() {

    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        axios.get(`http://localhost:8001/api/posts`)
            .then(response => { console.log(response); setPosts(response.data.data) })
            .catch(error => { console.log(error); })
    }, [])

    return (
        
        <Grid container spacing={4}>
            {posts.map((post, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} >
                    <Card sx={{ maxWidth: 300, margin: 3, borderRadius: 2 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image="/images/discgolfaction.jpg"
                            title="disc"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                { post.isFound ? "Found" : "Lost" }
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                Course:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                {post.course}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                Hole:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                {post.hole}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                Type:
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                {post.type}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleOpen} size="small" sx={{ fontFamily: 'Roboto Condensed, sans-serif', color: '#6EA15E' }}>Comments</Button>
                        </CardActions>
                        <Dialog open={open} onClose={handleClose} sx={{ "& .MuiPaper-root": { borderRadius: 2 } }}>
                            <DialogTitle sx={{ fontFamily: 'Roboto Condensed, sans-serif'}} >Comments</DialogTitle>
                            <DialogContent>
                                <DialogContentText sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    {/* {post.commentId} */}
                                </DialogContentText>
                                <TextField
                                        autoFocus
                                        margin="dense"
                                        id="comment"
                                        label="Comment"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        InputLabelProps={{ style: { fontFamily: 'Roboto Condensed, sans-serif' } }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, fontFamily: 'Roboto Condensed, sans-serif', m: 0.5 }} >Add comment</Button>
                                <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, fontFamily: 'Roboto Condensed, sans-serif', m: 0.5 }} >Cancel</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>))}
            </Grid>
        )
}

export default Post;
