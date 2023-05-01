import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

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
                console.log(response.data);
                if (response.data.status === 200) {
                    setCurrentUser(response.data.user)
                    navigate("/dashboard")
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
                '& > :not(style)': { m: 1.5, width: '45ch' },
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
            <div className="err-msg">{errMsg}</div>
            <div style={{ width: "100px" }}>
                <Button type="submit" variant="outlined" sx={{ color: 'white', borderColor: 'white', mt: 1 }}>
                    <Typography className="roboto-font" variant="subtitle1">Login</Typography>
                </Button>
            </div>
        </Box>
    );
}


export default Login;
