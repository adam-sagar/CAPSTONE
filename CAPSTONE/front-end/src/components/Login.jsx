import React, { useState } from 'react';

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
        // nedd to add logic to send request to backend
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
                Password
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}


export default Login;