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
                <Button className="roboto-font" onClick={handleOpen} size="small" sx={{ color: '#6EA15E' }}>Comments</Button>
            </CardActions>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
            >
                <DialogTitle className="roboto-font">Comments</DialogTitle>
                <DialogContent>
                    <DialogContentText className="roboto-font">
                        {/* comment goes here */}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Add comment"
                        type="text"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ style: { fontFamily: 'Roboto Condensed, sans-serif' } }}
                        sx={{ input: { fontFamily: 'Roboto Condensed, sans-serif' }}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button className="roboto-font" onClick={handleClose} variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, m: 0.5 }} >Add comment</Button>
                    <Button className="roboto-font" onClick={handleClose} variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, m: 0.5 }} >Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CommentDialog;
