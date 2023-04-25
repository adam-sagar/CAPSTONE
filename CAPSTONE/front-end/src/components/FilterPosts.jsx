import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FilterPosts() {

    

    return (

        <div>
            <FormControl sx={{ width: 150, mt: 3, ml: 3}}>
                <InputLabel id="course-filter-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Filter by course</InputLabel>
                <Select
                    labelId="course-filter-label"
                    id="course-filter"
                    label="course-filter"
                    // value={}
                    // onChange={}            
                >
                    <MenuItem value="" id="menu-item">All courses</MenuItem>
                    <MenuItem value="Jellie Park" id="menu-item">Jellie Park</MenuItem>
                    <MenuItem value="Queenspark" id="menu-item">Queenspark</MenuItem>
                    <MenuItem value="Warren Park" id="menu-item">Warren Park</MenuItem>
                    <MenuItem value="Brooker Ave" id="menu-item">Brooker Ave</MenuItem>
                    <MenuItem value="Ascot" id="menu-item">Ascot</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: 150, m: 3 }}>
                <InputLabel id="hole-filter-label" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Filter by hole</InputLabel>
                <Select
                    labelId="hole-filter-label"
                    id="hole-filter"
                    label="hole-filter"
                // value={}
                // onChange={}            
                >
                    <MenuItem value="" id="menu-item">All courses</MenuItem>
                    <MenuItem value="Jellie Park" id="menu-item">Jellie Park</MenuItem>
                    <MenuItem value="Queenspark" id="menu-item">Queenspark</MenuItem>
                    <MenuItem value="Warren Park" id="menu-item">Warren Park</MenuItem>
                    <MenuItem value="Brooker Ave" id="menu-item">Brooker Ave</MenuItem>
                    <MenuItem value="Ascot" id="menu-item">Ascot</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterPosts