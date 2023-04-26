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
import { Container, Grid } from '@mui/material';

function PostList(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ paddingBottom: 3 }}>
                {props.filteredPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                        <Card sx={{ maxWidth: 300, borderRadius: 2, margin: '0 auto' }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image="/images/discgolfaction.jpg"
                                title="disc"
                            />
                            <CardContent sx={{ height: 150 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    {post.isFound ? "Found" : "Lost"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Course:</Typography> {post.course}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Hole:</Typography> {post.hole}
                                </Typography>
                                {/* added a conditional so type won't display if user selects "Unsure" */}
                                {post.type !== "Unsure" ? (
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Type:</Typography> {post.type}
                                </Typography>
                                ) : null}
                            </CardContent>
                            <CardActions>
                                <Button onClick={handleOpen} size="small" sx={{ fontFamily: 'Roboto Condensed, sans-serif', color: '#6EA15E' }}>Comments</Button>
                            </CardActions>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                            > 
                                <DialogTitle sx={{ fontFamily: 'Roboto Condensed, sans-serif' }} >Comments</DialogTitle>
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
        </Container>
    )
}

export default PostList;
