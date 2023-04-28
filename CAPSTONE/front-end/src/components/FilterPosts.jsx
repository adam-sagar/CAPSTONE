import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

function FilterPosts(props) {

    const [lostFoundFilter, setLostFoundFilter] = useState('');
    const [courseFilter, setCourseFilter] = useState('');
    const [holeFilter, setHoleFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const longCourse = [];

    for (let i = 1; i <= 18; i++) {
        longCourse.push(
            <MenuItem className="roboto-font" key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    const resetFilters = () => {

        setLostFoundFilter('');
        setCourseFilter('');
        setHoleFilter('');
        setTypeFilter('');
        props.setFilters({ isFound: '', course: '', hole: '', type: '' });
    }

    return (

        <div>
            <FormControl sx={{ width: 120, mt: 3, mb: 3, mr: 3 }}>
                <InputLabel className="roboto-font" id="course-filter-label">Lost/found</InputLabel>
                <Select
                    labelId="course-filter-label"
                    id="course-filter"
                    label="course-filter"
                    value={lostFoundFilter}
                    onChange={e => { setLostFoundFilter(e.target.value); props.setFilters({ ...props.filters, isFound: e.target.value })}}
                    className="roboto-font"         
                >
                    <MenuItem value="" className="roboto-font">All Posts</MenuItem>
                    <MenuItem value={false} className="roboto-font">Lost</MenuItem>
                    <MenuItem value={true} className="roboto-font">Found</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: 120, mt: 3, mb:3, mr: 3 }}>
                <InputLabel className="roboto-font" id="course-filter-label">Course</InputLabel>
                <Select
                    labelId="course-filter-label"
                    id="course-filter"
                    label="course-filter"
                    value={courseFilter}
                    onChange={e => { setCourseFilter(e.target.value); props.setFilters({ ...props.filters, course: e.target.value })}}
                    className="roboto-font"            
                >
                    <MenuItem value="" className="roboto-font">All Courses</MenuItem>
                    <MenuItem value="Jellie Park" className="roboto-font">Jellie Park</MenuItem>
                    <MenuItem value="Queenspark" className="roboto-font">Queenspark</MenuItem>
                    <MenuItem value="Warren Park" className="roboto-font">Warren Park</MenuItem>
                    <MenuItem value="Brooker Ave" className="roboto-font">Brooker Ave</MenuItem>
                    <MenuItem value="Ascot" className="roboto-font">Ascot</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: 120, mt: 3, mb:3, mr: 3 }}>
                <InputLabel className="roboto-font" id="hole-filter-label">Hole</InputLabel>
                <Select
                    labelId="hole-filter-label"
                    id="hole-filter"
                    label="hole-filter"
                    value={holeFilter}
                    onChange={e => { setHoleFilter(e.target.value); props.setFilters({ ...props.filters, hole: e.target.value })}}
                    className="roboto-font"             
                >
                    <MenuItem value="" className="roboto-font">All Holes</MenuItem>
                    {longCourse}
                </Select>
            </FormControl>

            <FormControl sx={{ width: 120, mt: 3, mb: 3, mr: 3 }}>
                <InputLabel className="roboto-font" id="type-filter-label">Type</InputLabel>
                <Select
                    labelId="type-filter-label"
                    id="type-filter"
                    label="type-filter"
                    value={typeFilter}
                    onChange={e => { setTypeFilter(e.target.value); props.setFilters({ ...props.filters, type: e.target.value })}}
                    className="roboto-font"            
                >
                    <MenuItem value="" className="roboto-font">All Types</MenuItem>
                    <MenuItem value="Driver" className="roboto-font">Driver</MenuItem>
                    <MenuItem value="Mid-range" className="roboto-font">Mid-range</MenuItem>
                    <MenuItem value="Putter" className="roboto-font">Putter</MenuItem>
                </Select>
                <Button onClick={resetFilters} className="roboto-font" sx={{ mt: 1, color: "#6EA15E" }}>Reset</Button>
            </FormControl>
        </div>
    )
}

export default FilterPosts