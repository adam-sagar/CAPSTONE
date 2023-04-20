import React, { useState } from "react";
import { Modal, Button, TextField, Box } from "@mui/material";

function CreatePost() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        // need to add logic for adding to database and displaying as a card on the page
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get("title"), formData.get("content"));
        handleCloseModal();
    };

    return (

        <div className="PostsPage">
            <Button variant="contained" sx={{ backgroundColor: '#6EA15E', margin: '10px', ':hover': { backgroundColor: '#4B784A' } }} onClick={handleShowModal}>
                Create Post
            </Button>
            <Modal open={showModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ p: 2, bgcolor: "background.paper", width: 400 }}>
                    <h2>Create Post</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="title"
                            label="Title"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="content"
                            label="Content"
                            fullWidth
                            multiline
                            margin="normal"
                        />
                        <Button variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' } }} type="submit">
                            Create
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default CreatePost;
