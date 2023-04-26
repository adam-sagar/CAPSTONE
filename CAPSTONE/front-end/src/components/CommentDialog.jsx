import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, CardActions } from '@mui/material';

function CommentDialog() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
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
        </div>
    )
}

export default CommentDialog;
