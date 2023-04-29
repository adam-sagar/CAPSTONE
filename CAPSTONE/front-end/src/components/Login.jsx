import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

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

        let loginDetails = {
            username: username,
            password: password
        };
        
        console.log(loginDetails);

        axios.post('http://localhost:8001/api/login', loginDetails)
            .then(response => {
                // handle response - similar to SignUp component
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '55ch' },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
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
            <div style={{ width: "100px" }}>
                <Button type="submit" variant="outlined" sx={{ color: 'white', borderColor: 'white', mt: 1 }}>
                    <Typography className="roboto-font" variant="subtitle1">Login</Typography>
                </Button>
            </div>
        </Box>
    );
}


export default Login;
