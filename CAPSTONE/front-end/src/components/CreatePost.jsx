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
                props.onAddPost(data)
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
            <MenuItem className="roboto-font" key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    const shortCourse = [];

    for (let i = 1; i <= 9; i++) {
        shortCourse.push(
            <MenuItem className="roboto-font" key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    return (

        <div className="CreatePost">
            <Button className="roboto-font" variant="contained" sx={{ backgroundColor: '#6EA15E', m: 3, ':hover': { backgroundColor: '#4B784A' } }} onClick={handleShowModal}>
                Create Post
            </Button>
            <Modal open={showModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className="roboto-font" sx={{ p: 2, bgcolor: "background.paper", width: 400, borderRadius: 2 }}>
                    <form onSubmit={handleSubmit}>

                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            Have you lost or found a disc?
                        </Typography>
                        <RadioGroup name="isFound" value={isFound} onChange={event => setIsFound(event.target.value)}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio required value="true" />
                                <Typography className="roboto-font" variant="body1" gutterBottom>
                                    Found
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Radio value="false" />
                                <Typography className="roboto-font" variant="body1" gutterBottom>
                                    Lost
                                </Typography>
                            </Box>
                        </RadioGroup>

                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            On what course?
                        </Typography>
                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel className="roboto-font" id="course-label">Course</InputLabel>
                            <Select
                                name="course"
                                label="Course"
                                defaultValue=""
                                sx={{ mb: 2 }}
                                labelId="course-label"
                                onChange={event => setCourse(event.target.value)}
                                value={course}
                                className="roboto-font" 
                            >
                                <MenuItem value="Jellie Park" className="roboto-font">Jellie Park</MenuItem>
                                <MenuItem value="Queenspark" className="roboto-font">Queenspark</MenuItem>
                                <MenuItem value="Warren Park" className="roboto-font">Warren Park</MenuItem>
                                <MenuItem value="Brooker Ave" className="roboto-font">Brooker Ave</MenuItem>
                                <MenuItem value="Ascot" className="roboto-font">Ascot</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            On what hole?
                        </Typography>
                        {course === "Brooker Ave" || course === "Queenspark" ? // brooker-ave and queenspark only have 9 holes. Added a conditional that changes the select range to 1-9 if they are selected. 
                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel className="roboto-font" id="hole-label">Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={event => setHole(event.target.value)}
                                    value={hole}
                                    className="roboto-font" 
                                >
                                    {shortCourse}
                                </Select>
                            </FormControl> :
                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel className="roboto-font" id="hole-label">Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={event => setHole(event.target.value)}
                                    value={hole}
                                    className="roboto-font" 
                                >
                                    {longCourse}
                                </Select>
                            </FormControl>}

                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            What type of disc is it?
                        </Typography>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel className="roboto-font" id="type-label">Type</InputLabel>
                            <Select
                                name="type"
                                label="Type"
                                defaultValue=""
                                sx={{ mb: 2 }}
                                labelId="type-label"
                                onChange={event => setType(event.target.value)}
                                value={type}
                                className="roboto-font" 
                            >
                                <MenuItem value="Driver" className="roboto-font">Driver</MenuItem>
                                <MenuItem value="Mid-range" className="roboto-font">Mid-range</MenuItem>
                                <MenuItem value="Putter" className="roboto-font">Putter</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            Upload photo
                        </Typography>

                        <Button className="roboto-font" variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }}} type="submit">
                            Create
                        </Button>
                        <Button className="roboto-font" onClick={handleCloseModal} variant="contained" sx={{ backgroundColor: '#6EA15E', ':hover': { backgroundColor: '#4B784A' }, m: 2 }} >Cancel</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default CreatePost;
