import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);

        if (e.target.value === '') {
            setUsernameError('');
        } else if (e.target.validity.patternMismatch) {
            setUsernameError("Must only contain letters, numbers, hyphens, and underscores");
        } else if (e.target.validity.tooShort) {
            setUsernameError("Must be 3 or more characters long.");
        } else {
            setUsernameError('');
        }
    }

    const handlePasswordChange = (e) => {

        setPassword(e.target.value);
        if (e.target.value === '') {
            setPasswordError('');
        } else {
            setPasswordError(!e.target.validity.valid);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let signUpDetails = {
            username: username,
            email: email,
            password: password
        };

        console.log(signUpDetails);

        axios.post('http://localhost:8001/api/users/create', signUpDetails)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 200) {
                    setSuccessMsg(
                        <Typography variant="body1" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 300 }}>
                            Successfully created account. Return to login{" "}
                            <Link className='link' to="/login" onClick={() => navigate("/login")}>
                                here
                            </Link>
                            .
                        </Typography>
                    );
                    resetForm();
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
                '& > :not(style)': { mt: 1, width: '45ch' },
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
                inputProps={{ pattern: "[a-zA-Z0-9_-]*", minLength: 3, maxLength: 30 }}
                helperText={usernameError}
                error={usernameError}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' },
                    height: "50px",
                    mb: 1
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
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' },
                    mb: 1
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
                inputProps={{ minLength: 6, maxLength: 30 }}
                helperText={passwordError ? "Must be at least 6 characters long" : " "}
                error={passwordError}
                sx={{
                    input: { color: "white", borderBottom: '1px solid white', fontFamily: 'Roboto Condensed, sans-serif' },
                    label: { color: "white", fontFamily: 'Roboto Condensed, sans-serif' }
                }}
            />
            {successMsg ? (
                <div className="success-msg">{successMsg}</div>
            ) : (
                <>
                    {errMsg && <div className="err-msg">{errMsg}</div>}
                    <div style={{ width: "100px" }}>
                        <Button
                            type="submit"
                            variant="outlined"
                            sx={{ color: 'white', borderColor: 'white', mt: 4 }}
                        >
                            <Typography className="roboto-font" variant="subtitle1">
                                Sign up
                            </Typography>
                        </Button>
                    </div>
                </>
            )}
        </Box>
    );
}


export default SignUp;
