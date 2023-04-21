import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append ('password', password);
        console.log({username, password});
    }

    return (

        // form before adding MUI

        // <form onSubmit={handleSubmit}>
        //     <label>
        //         Username
        //         <input type="text" value={username} onChange={handleUsernameChange} />
        //     </label>
        //     <label>
        //         Password
        //         <input type="password" value={password} onChange={handlePasswordChange} />
        //     </label>
        //     <button type="submit">Login</button>
        // </form>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="username"
                name="username"
                label="Username"
                variant="standard"
                required
                value={username}
                onChange={handleUsernameChange}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white' }, // changed labels and border to white
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' } // changed to custom font with available fallback option
                }}
            />
            <TextField
                id="password"
                name="password"                
                label="Password"
                variant="standard"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' }
                }}
            />
            <Button type="submit" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Login</Typography> {/*changed button font*/}
            </Button>
        </Box>
    );
}


export default Login;
