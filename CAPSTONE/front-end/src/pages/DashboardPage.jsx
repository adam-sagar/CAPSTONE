import { useState } from "react";
import React from "react";
import NavBar from "../components/NavBar";
import { Card,CardMedia, Typography, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField } from "@mui/material";
import FilterPosts from "../components/FilterPosts";

function DashboardPage() {

    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        
        <div className="DashboardPage">
            <NavBar />
            <Card sx={{ maxWidth: 300, borderRadius: 2, margin: '0 auto' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/images/discgolfaction.jpg"
                    title="disc"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                        {/* {post.isFound ? "Found" : "Lost"} */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                        <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Course:</Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                        <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Hole:</Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                        <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Type:</Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} size="small" sx={{ fontFamily: 'Roboto Condensed, sans-serif', color: '#6EA15E' }}>Comments</Button>
                </CardActions>
                <Dialog open={open} onClose={handleClose} sx={{ "& .MuiPaper-root": { borderRadius: 2 } }}>
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
        </div>
    )
}

export default DashboardPage;