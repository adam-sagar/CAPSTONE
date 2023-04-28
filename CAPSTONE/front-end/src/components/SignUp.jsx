import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState(''); //  was previously in use, but became unnecessary after making the form fields required. Will keep for potential future use
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let signUpDetails = {
            username: username,
            email: email,
            password: password
        }

        axios.post('http://localhost:8001/api/users/create', signUpDetails)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 200) {
                    navigate('/login')
                } else {
                    setErrMsg(response.data.error)
                }
            })
            .catch(error => {
                console.error(error);
            });

    }

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
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="Username"
                label="Username"
                variant="standard"
                required
                value={username}
                onChange={handleUsernameChange}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' }
                }}
            />
            <TextField
                id="Email"
                label="Email"
                variant="standard"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' }
                }}
            />
            <TextField
                id="password"
                label="Password"
                variant="standard"
                required
                type="password"
                value={password}
                onChange={handlePasswordChange}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' }
                }}
            />
            {/* <div>{errMsg}</div> */}
            <Button type="submit" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                <Typography className="roboto-font" variant="subtitle1">Sign up</Typography>
            </Button>
        </Box>
    );

}


export default SignUp;
