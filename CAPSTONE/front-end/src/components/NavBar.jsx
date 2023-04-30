import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';
import discGolfBasket from '@iconify-icons/game-icons/disc-golf-basket';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [{ label: 'Dashboard', path: '/dashboard' }, { label: 'Posts', path: '/posts' }];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: '#484848' }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.5rem',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#fff',
                                fontFamily: 'Bangers, Roboto Condensed, sans-serif',
                                marginRight: '1rem',
                                fontSize: '2rem',
                            }}
                        >
                            <Icon icon={discGolfBasket} width="1.25em" height="1.25em" />
                            <Box sx={{ width: '0.5rem' }} />
                            DISC DETECTIVE
                        </Typography>
                        {/* Mobile menu button */}
                        <IconButton
                            color="inherit"
                            aria-label="open mobile menu"
                            onClick={toggleMobileMenu}
                            sx={{ display: { md: 'none' } }}
                        >
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        {/* Mobile menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.path}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Roboto Condensed, sans-serif',
                                        fontWeight: '300',
                                        fontSize: '1.2rem',
                                        marginRight: '0.5rem',
                                        '&:hover': { color: '#535bf2' },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    {/* Desktop logout button */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <Button
                            component={Link}
                            to="/"
                            endIcon={<LogoutIcon />}
                            sx={{
                                color: '#fff',
                                fontFamily: 'Roboto Condensed, sans-serif',
                                fontWeight: '300',
                                fontSize: '1.2rem',
                                '&:hover': { color: '#535bf2' },
                                '& .MuiButton-startIcon': {
                                    marginRight: '0.5rem',
                                },
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
                    {/* Mobile menu */}
                    <Box
                        sx={{
                            display: { xs: isMobileMenuOpen ? 'flex' : 'none', md: 'none' },
                            flexDirection: 'column',
                            position: 'absolute',
                            top: '64px',
                            left: 0,
                            right: 0,
                            backgroundColor: '#484848',
                            padding: '0.5rem',
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: '#fff',
                                    fontFamily: 'Roboto Condensed, sans-serif',
                                    fontWeight: '300',
                                    fontSize: '1.2rem',
                                    marginTop: '0.5rem',
                                    '&:hover': { color: '#535bf2' },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Box sx={{ marginTop: '0.5rem', textAlign: 'center' }}>
                            <Button
                                component={Link}
                                to="/"
                                endIcon={<LogoutIcon />}
                                sx={{
                                    color: '#fff',
                                    fontFamily: 'Roboto Condensed, sans-serif',
                                    fontWeight: '300',
                                    fontSize: '1.2rem',
                                    '&:hover': { color: '#535bf2' },
                                    '& .MuiButton-startIcon': {
                                        marginRight: '0.5rem',
                                    },
                                }}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;