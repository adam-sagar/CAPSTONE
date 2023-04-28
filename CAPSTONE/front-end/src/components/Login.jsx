import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        // logic for sending to back-end
        console.log({username, password});
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const loginData = {
    //         username: username,
    //         password: password
    //     };
    //     console.log(loginData);
    //     // send loginData to back-end
    // };

    return (

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
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
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
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' }
                }}
            />
            <Button type="submit" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                <Typography className="roboto-font" variant="subtitle1">Login</Typography>
            </Button>
        </Box>
    );
}


export default Login;
