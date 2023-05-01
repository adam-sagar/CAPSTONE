import React, { useState } from "react";
import { Modal, Button, Select, MenuItem, RadioGroup, Radio, Box, Typography, FormControl, InputLabel } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from "axios";


function EditPost(props) {

    const [showModal, setShowModal] = useState(false);
    const [isFound, setIsFound] = useState('');
    const [course, setCourse] = useState('');
    const [hole, setHole] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState({ preview: '', data: '' });

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        resetState();
        setShowModal(false);
    };

    const resetState = () => {
        setIsFound('');
        setCourse('');
        setHole('');
        setType('');
        setImage({ preview: '', data: '' });
    }

    const handleSubmit = () => {

        let formData = new FormData();
        let userId = 1; // fix up once login works

        formData.append('image', image.data)
        formData.append('isFound', isFound)
        formData.append('course', course)
        formData.append('hole', hole)
        formData.append('type', type)

        axios.put(`http://localhost:8001/api/posts/create/${userId}`, formData)
            .then(response => {
                console.log(response.data);
                // props.onAddPost(formData)
                handleCloseModal();
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleFileChange = e => {

        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }

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
                Edit Post
            </Button>
            <Modal open={showModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className="roboto-font" sx={{ p: 2, bgcolor: "background.paper", width: 400, borderRadius: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            Have you lost or found a disc?
                        </Typography>
                        <RadioGroup name="isFound" value={isFound} onChange={e => setIsFound(e.target.value)}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio required value="true" id="found" />
                                <label htmlFor="found">
                                    <Typography className="roboto-font" variant="body1" gutterBottom>
                                        Found
                                    </Typography>
                                </label>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Radio value="false" id="lost" />
                                <label htmlFor="lost">
                                    <Typography className="roboto-font" variant="body1" gutterBottom>
                                        Lost
                                    </Typography>
                                </label>
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
                                onChange={e => setCourse(e.target.value)}
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
                        {course === "Brooker Ave" || course === "Queenspark" ? // brooker-ave and queenspark only have 9 holes. Added a conditional that changes the select range to 1-9 if they are selected
                            <FormControl fullWidth required sx={{ mb: 2 }}>
                                <InputLabel className="roboto-font" id="hole-label">Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={e => setHole(e.target.value)}
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
                                    onChange={e => setHole(e.target.value)}
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
                                onChange={e => setType(e.target.value)}
                                value={type}
                                className="roboto-font"
                            >
                                <MenuItem value="Driver" className="roboto-font">Driver</MenuItem>
                                <MenuItem value="Mid-range" className="roboto-font">Mid-range</MenuItem>
                                <MenuItem value="Putter" className="roboto-font">Putter</MenuItem>
                            </Select>
                        </FormControl>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <InputLabel className="roboto-font">
                                Upload photo
                            </InputLabel>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label">
                                <input hidden accept="image/*" type="file" onChange={handleFileChange} />
                                <PhotoCamera style={{ color: "#6EA15E" }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                            {image.preview && <img src={image.preview} width="75" height="75" />}
                        </Box>
                        <Button
                            className="roboto-font"
                            variant="contained"
                            sx={{ backgroundColor: "#6EA15E", ":hover": { backgroundColor: "#4B784A" }, mt: 2 }}
                            type="submit"
                        >
                            Edit
                        </Button>
                        <Button
                            className="roboto-font"
                            onClick={handleCloseModal}
                            variant="contained"
                            sx={{ backgroundColor: "#6EA15E", ":hover": { backgroundColor: "#4B784A" }, mt: 2, ml: 2 }}
                        >
                            Cancel
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default EditPost;
