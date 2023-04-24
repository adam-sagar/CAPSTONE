import React, { useState } from "react";
import { Modal, Button, Select, MenuItem, RadioGroup, Radio, Box, Typography, FormControl, InputLabel } from "@mui/material";
import axios from "axios";


function CreatePost(props) {

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

    const handleSubmit = (event) => {
        // event.preventDefault();
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

    // using a for loop to generate MenuItem components instead of having to write them all out individually
    const menuItemsLong = [];

    for (let i = 1; i <= 18; i++) {
        menuItemsLong.push(
            <MenuItem key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    const menuItemsShort = [];

    for (let i = 1; i <= 9; i++) {
        menuItemsShort.push(
            <MenuItem key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    return (

        <div className="CreatePost">
            <Button variant="contained" sx={{ backgroundColor: '#6EA15E', margin: 3, ':hover': { backgroundColor: '#4B784A' }, fontFamily: 'Roboto Condensed, sans-serif' }} onClick={handleShowModal}>
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
                        {course === "brooker-ave" || course === "queenspark" ? // brooker-ave and queenspark only have 9 holes. Added a conditional that changes the select range to 1-9 if they are selected. 
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
                                    {menuItemsShort}
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
                                    {menuItemsLong}
                                </Select>
                            </FormControl>
                        }
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
