import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Select, MenuItem, RadioGroup, Radio, Box, Typography, FormControl, InputLabel, CardActions } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function EditPost(props) {

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState({ preview: '', data: '' });
    const [edit, setEdit] = useState({});
    const { currentUser } = useContext(UserContext);

    useEffect(() => {

        axios.get(`http://localhost:8001/api/posts/${props.postId}`)
            .then(response => {
                setEdit(response.data.data);
                console.log(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        resetState();
        setShowModal(false);
    };

    const resetState = () => {
        setEdit({})
        setImage({ preview: '', data: '' });
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(); // have to use FormData for uploading images with multer

        formData.append('image', image.data)
        formData.append('isFound', edit.isFound)
        formData.append('course', edit.course)
        formData.append('hole', edit.hole)
        formData.append('type', edit.type)
        formData.append('id', edit.id)

        axios.put(`http://localhost:8001/api/posts/${props.postId}`, formData)
            .then(response => {
                console.log(response.data);
                props.onUpdatePost(formData)
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

        <div>
            <CardActions>
                <Button className="roboto-font" onClick={handleShowModal} size="small" sx={{ color: '#6EA15E' }}>Edit</Button>
            </CardActions>
            <Modal open={showModal} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className="roboto-font" sx={{ p: 2, bgcolor: "background.paper", width: 400, borderRadius: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <Typography className="roboto-font" variant="h5" gutterBottom>
                            Have you lost or found a disc?
                        </Typography>
                        <RadioGroup name="isFound" value={edit.isFound} onChange={e => setEdit({...edit, isFound: Boolean(e.target.value)})}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio value="true" id="found" />
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
                        <FormControl  fullWidth sx={{ mb: 2 }}>
                            <InputLabel className="roboto-font" id="course-label">Course</InputLabel>
                            <Select
                                name="course"
                                label="Course"
                                // defaultValue={edit.course}
                                sx={{ mb: 2 }}
                                labelId="course-label"
                                onChange={e => setEdit({ ...edit, course: e.target.value })}
                                value={edit.course}
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
                        {edit.course === "Brooker Ave" || edit.course === "Queenspark" ? // brooker-ave and queenspark only have 9 holes. Added a conditional that changes the select range to 1-9 if they are selected
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel className="roboto-font" id="hole-label">Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    // defaultValue={edit.hole}
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={e => setEdit({ ...edit, hole: Number(e.target.value) })}
                                    value={edit.hole}
                                    className="roboto-font"
                                >
                                    {shortCourse}
                                </Select>
                            </FormControl> :
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel className="roboto-font" id="hole-label">Hole</InputLabel>
                                <Select
                                    name="hole"
                                    label="Hole"
                                    // defaultValue={edit.hole}
                                    sx={{ mb: 2 }}
                                    labelId="course-label"
                                    onChange={e => setEdit({ ...edit, hole: Number(e.target.value) })}
                                    value={edit.hole}
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
                                // defaultValue={edit.type}
                                sx={{ mb: 2 }}
                                labelId="type-label"
                                onChange={e => setEdit({ ...edit, type: e.target.value })}
                                value={edit.type}
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
                            Update
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
    )
}

export default EditPost;
