import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Icon } from '@iconify/react';
import discGolfBasket from '@iconify-icons/game-icons/disc-golf-basket';

function NavBar() {

    const navItems = [{ label: 'Dashboard', path: '/dashboard' }, { label: 'Posts', path: '/posts' }];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: 'midnightblue', pt: '0.5rem', pb: '0.5rem' }}> {/* added top and bottom padding to make navbar bigger */}
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ display: 'flex', alignItems: 'center', color: '#fff', fontFamily: 'Roboto Condensed', fontWeight: 'bold', marginRight: '2rem' }}
                        >
                            <Icon icon={discGolfBasket} width="1.5em" height="1.5em" /> {/* installed npm iconify package to add icon to navbar */}
                            <Box sx={{ width: '0.5rem' }} />
                            DISC DETECTIVE
                        </Typography>
                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{ color: '#fff', fontFamily: 'Roboto Condensed', fontWeight: '300', fontSize: '1.5rem', marginRight: '1rem' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{ color: '#fff', fontFamily: 'Roboto Condensed', fontWeight: '300', fontSize: '1.5rem' }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
