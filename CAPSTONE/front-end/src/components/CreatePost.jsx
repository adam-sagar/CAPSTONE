import React, { useState } from "react";
import { Modal, Button, Select, MenuItem, RadioGroup, Radio, Box, Typography, FormControl, InputLabel } from "@mui/material";
import axios from "axios";


function CreatePost() {

    const [showModal, setShowModal] = useState(false);
    const [isFound, setIsFound] = useState('');
    const [course, setCourse] = useState('');
    const [hole, setHole] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = () => {
        const data = {
            isFound: isFound,
            course: course,
            hole: hole,
            type: type,
            image: image
        };
        
        axios.post(`http://localhost:8001/api/posts/create`, data)
            .then(response => {
                console.log(response.data);
                handleCloseModal();
            })
            .catch(error => {
                console.error(error);
            });
    };

    // using for loops to generate MenuItem components instead of having to write them all out individually
    const longCourse = [];

    for (let i = 1; i <= 18; i++) {
        longCourse.push(
            <MenuItem id="menu-item" key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    const shortCourse = [];

    for (let i = 1; i <= 9; i++) {
        shortCourse.push(
            <MenuItem id="menu-item" key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

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
                        <RadioGroup name="isFound" value={isFound} onChange={event => setIsFound(event.target.value)}>
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
                                onChange={event => setCourse(event.target.value)}
                                value={course}
                            >
                                <MenuItem value="Jellie Park" id="menu-item">Jellie Park</MenuItem>
                                <MenuItem value="Queenspark" id="menu-item">Queenspark</MenuItem>
                                <MenuItem value="Warren Park" id="menu-item">Warren Park</MenuItem>
                                <MenuItem value="Brooker Ave" id="menu-item">Brooker Ave</MenuItem>
                                <MenuItem value="Ascot" id="menu-item">Ascot</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography variant="h5" gutterBottom fontFamily='Roboto Condensed, sans-serif'>
                            On what hole?
                        </Typography>
                        {course === "Brooker Ave" || course === "Queenspark" ? // brooker-ave and queenspark only have 9 holes. Added a conditional that changes the select range to 1-9 if they are selected. 
                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel id="hole-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={event => setHole(event.target.value)}
                                    value={hole}
                                >
                                    {shortCourse}
                                </Select>
                            </FormControl> :
                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel id="hole-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={event => setHole(event.target.value)}
                                    value={hole}
                                >
                                    {longCourse}
                                </Select>
                            </FormControl>}
                        
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
                                onChange={event => setType(event.target.value)}
                                value={type}
                            >
                                <MenuItem value="Driver" id="menu-item">Driver</MenuItem>
                                <MenuItem value="Mid-range" id="menu-item">Mid-range</MenuItem>
                                <MenuItem value="Putter" id="menu-item">Putter</MenuItem>
                                <MenuItem value="Unsure" id="menu-item">Unsure</MenuItem>
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
