import React, { useState } from "react";
import { Modal, Button, Select, MenuItem, RadioGroup, Radio, Box, Typography } from "@mui/material";


function CreatePost() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const foundOrLost = formData.get("foundOrLost");
        const course = formData.get("course");
        const hole = formData.get("hole");
        const type = formData.get("type");
        console.log({ foundOrLost, course, hole, type });
        handleCloseModal();
    };

    return (

        <div className="CreatePost">
            <Button variant="contained" sx={{ backgroundColor: '#6EA15E', margin: '10px', ':hover': { backgroundColor: '#4B784A' } }} onClick={handleShowModal}>
                Create Post
            </Button>
            <Modal open={showModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ p: 2, bgcolor: "background.paper", width: 400, borderRadius: 5, border: '3px solid #484848' }}>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h5" gutterBottom>
                            Have you lost or found a disc?
                        </Typography>
                        <RadioGroup name="foundOrLost">
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio required value="found" />
                                <Typography variant="body1" gutterBottom>
                                    Found
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Radio value="lost" />
                                <Typography variant="body1" gutterBottom>
                                    Lost
                                </Typography>
                            </Box>
                        </RadioGroup>
                        <Typography variant="h5" gutterBottom>
                            On what course?
                        </Typography>
                        <Select
                            name="course"
                            label="Course"
                            fullWidth
                            defaultValue=""
                            required
                            sx={{ mb: 2 }}
                        >
                            <MenuItem value="jellie-park">Jellie Park</MenuItem>
                            <MenuItem value="queenspark">Queenspark</MenuItem>
                            <MenuItem value="warren-park">Warren Park</MenuItem>
                            <MenuItem value="brooker-ave">Brooker Ave</MenuItem>
                            <MenuItem value="ascot">Ascot</MenuItem>
                        </Select>
                        <Typography variant="h5" gutterBottom>
                            On what hole?
                        </Typography>
                        <Select
                            name="hole"
                            label="Hole"
                            fullWidth
                            defaultValue=""
                            required
                            sx={{ mb: 2 }}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="9">9</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="11">11</MenuItem>
                            <MenuItem value="12">12</MenuItem>
                            <MenuItem value="13">13</MenuItem>
                            <MenuItem value="14">14</MenuItem>
                            <MenuItem value="15">15</MenuItem>
                            <MenuItem value="16">16</MenuItem>
                            <MenuItem value="17">17</MenuItem>
                            <MenuItem value="18">18</MenuItem>
                        </Select>
                        <Typography variant="h5" gutterBottom>
                            What type of disc is it?
                        </Typography>
                        <Select
                            name="type"
                            label="Type"
                            fullWidth
                            defaultValue=""
                            required
                            sx={{ mb: 2 }}
                        >
                            <MenuItem value="driver">Driver</MenuItem>
                            <MenuItem value="mid-range">Mid-range</MenuItem>
                            <MenuItem value="putter">Putter</MenuItem>
                            <MenuItem value="unsure">Unsure</MenuItem>
                        </Select>
                        <Typography variant="h5" gutterBottom>
                            Upload photo
                        </Typography>
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
