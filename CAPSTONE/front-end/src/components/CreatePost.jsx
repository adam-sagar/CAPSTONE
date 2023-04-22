import React, { useState } from "react";
import { Modal, Button, Select, MenuItem, RadioGroup, Radio, Box, Typography, FormControl, InputLabel } from "@mui/material";


function CreatePost(props) {

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
        const isFound = formData.get("isFound");
        const course = formData.get("course");
        const hole = formData.get("hole");
        const type = formData.get("type");
        console.log({ isFound, course, hole, type });
        handleCloseModal();
    };

    return (

        <div className="CreatePost">
            <Button variant="contained" sx={{ backgroundColor: '#6EA15E', m: 3, ':hover': { backgroundColor: '#4B784A' }, fontFamily: 'Roboto Condensed, sans-serif' }} onClick={handleShowModal}>
                Create Post
            </Button>
            <Modal open={showModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ p: 2, bgcolor: "background.paper", width: 400, borderRadius: 2, fontFamily: 'Roboto Condensed, sans-serif' }}>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h5" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                            Have you lost or found a disc?
                        </Typography>
                        <RadioGroup name="isFound">
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio required value="true" />
                                <Typography variant="body1" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                                    Found
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Radio value="false" />
                                <Typography variant="body1" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                                    Lost
                                </Typography>
                            </Box>
                        </RadioGroup>
                        <Typography variant="h5" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                            On what course?
                        </Typography>
                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel id="course-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Course</InputLabel>
                            <Select
                                name="course"
                                label="Course"
                                defaultValue=""
                                sx={{ mb: 2 }}
                                labelId="course-label"
                                // onChange={event => setC(event.target.value)}
                            >
                                <MenuItem value="jellie-park">Jellie Park</MenuItem>
                                <MenuItem value="queenspark">Queenspark</MenuItem>
                                <MenuItem value="warren-park">Warren Park</MenuItem>
                                <MenuItem value="brooker-ave">Brooker Ave</MenuItem>
                                <MenuItem value="ascot">Ascot</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography variant="h5" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                            On what hole?
                        </Typography>
                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel id="hole-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Hole</InputLabel>
                            <Select
                                name="hole"
                                label="Hole"
                                defaultValue=""
                                sx={{ mb: 2 }}
                                labelId="course-label"
                                // onChange={event => setH(event.target.value)}
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
                        </FormControl>
                        <Typography variant="h5" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                            What type of disc is it?
                        </Typography>
                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel id="type-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Type</InputLabel>
                            <Select
                                name="type"
                                label="Type"
                                defaultValue=""
                                sx={{ mb: 2 }}
                                labelId="type-label"
                                // onChange={event => setT(event.target.value)}
                            >
                                <MenuItem value="driver">Driver</MenuItem>
                                <MenuItem value="mid-range">Mid-range</MenuItem>
                                <MenuItem value="putter">Putter</MenuItem>
                                <MenuItem value="unsure">Unsure</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography variant="h5" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                            Upload photo
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, fontFamily: 'Roboto Condensed, sans-serif' }} type="submit">
                            Create
                        </Button>
                        <Button onClick={handleCloseModal} variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, fontFamily: 'Roboto Condensed, sans-serif', m: 2 }} >Cancel</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default CreatePost;
