import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FilterPosts(props) {

    const [lostFoundFilter, setLostFoundFilter] = useState('');
    const [courseFilter, setCourseFilter] = useState('');
    const [holeFilter, setHoleFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const longCourse = [];

    for (let i = 1; i <= 18; i++) {
        longCourse.push(
            <MenuItem id="menu-item" key={i} value={i}>
                {i}
            </MenuItem>
        );
    }

    return (

        <div>
            <FormControl sx={{ width: 120, mt: 3, mb: 3, mr: 3 }}>
                <InputLabel id="course-filter-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Lost/found</InputLabel>
                <Select
                    labelId="course-filter-label"
                    id="course-filter"
                    label="course-filter"
                    value={lostFoundFilter}
                    onChange={event => { setLostFoundFilter(event.target.value); props.setFilters({ ...props.filters, isFound: event.target.value })}}            
                >
                    <MenuItem value="" id="menu-item">All Posts</MenuItem>
                    <MenuItem value={false} id="menu-item">Lost</MenuItem>
                    <MenuItem value={true} id="menu-item">Found</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: 120, mt: 3, mb:3, mr: 3 }}>
                <InputLabel id="course-filter-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Course</InputLabel>
                <Select
                    labelId="course-filter-label"
                    id="course-filter"
                    label="course-filter"
                    value={courseFilter}
                    onChange={event => { setCourseFilter(event.target.value); props.setFilters({ ...props.filters, course: event.target.value })}}            
                >
                    <MenuItem value="" id="menu-item">All Courses</MenuItem>
                    <MenuItem value="Jellie Park" id="menu-item">Jellie Park</MenuItem>
                    <MenuItem value="Queenspark" id="menu-item">Queenspark</MenuItem>
                    <MenuItem value="Warren Park" id="menu-item">Warren Park</MenuItem>
                    <MenuItem value="Brooker Ave" id="menu-item">Brooker Ave</MenuItem>
                    <MenuItem value="Ascot" id="menu-item">Ascot</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: 120, mt: 3, mb:3, mr: 3 }}>
                <InputLabel id="hole-filter-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Hole</InputLabel>
                <Select
                    labelId="hole-filter-label"
                    id="hole-filter"
                    label="hole-filter"
                    value={holeFilter}
                    onChange={event => { setHoleFilter(event.target.value); props.setFilters({ ...props.filters, hole: event.target.value })}}            
                >
                    <MenuItem value="" id="menu-item">All Holes</MenuItem>
                    {longCourse}
                </Select>
            </FormControl>

            <FormControl sx={{ width: 120, mt: 3, mb: 3, mr: 3 }}>
                <InputLabel id="type-filter-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Type</InputLabel>
                <Select
                    labelId="type-filter-label"
                    id="type-filter"
                    label="type-filter"
                    value={typeFilter}
                    onChange={event => { setTypeFilter(event.target.value); props.setFilters({ ...props.filters, type: event.target.value })}}           
                >
                    <MenuItem value="" id="menu-item">All Types</MenuItem>
                    <MenuItem value="Driver" id="menu-item">Driver</MenuItem>
                    <MenuItem value="Mid-range" id="menu-item">Mid-range</MenuItem>
                    <MenuItem value="Putter" id="menu-item">Putter</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterPosts