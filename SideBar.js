import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import PaymentIcon from '@mui/icons-material/Payment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Manyaa from '../assets/manyaa.svg';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLocation, useNavigate } from "react-router-dom"
import Profile from '../assets/profile.jpg';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: '#A7CDCC',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
        backgroundColor: '#A7CDCC',
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, path: '/' },
        { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
        { text: 'Assessment', icon: <AssessmentIcon />, path: '/assessment' },
        { text: 'Find Doctors', icon: <SearchIcon />, path: '/find-doctors' },
        { text: 'Book Appointment', icon: <BookIcon />, path: '/book-appointment' },
        { text: 'Payment', icon: <PaymentIcon />, path: '/payment' },
        { text: 'Subscription', icon: <SubscriptionsIcon />, path: '/subscription' },
        { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
        { text: 'Communication', icon: <MessageIcon />, path: '/communication' },
        { text: 'Content Access', icon: <AccessibilityIcon />, path: '/content-access' },
    ];

    return (
        <Box style={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ boxShadow: 'none', }}>
                <Toolbar style={{ backgroundColor: '#F6F6F6' }}>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                            backgroundColor: '#A7CDCC'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography div sx={{ border: '1px solid #004A55', backgroundColor: 'white', borderRadius: '10px', padding: '10px 10px', display: 'flex', height: 'fit-content', margin: 'auto 0px' }}>
                            <ErrorOutlineOutlinedIcon sx={{ transform: 'rotate(180deg)', marginRight: '5px' }} />
                            <Typography>Your starting point for mental wellness</Typography>
                        </Typography>
                        <Typography div sx={{ display: 'flex' }}>
                            <Avatar style={{ margin: 'auto 0px' }} alt="Bharat" src={Profile} />
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Jhon Smith</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box sx={{ display: 'flex', padding: '0px', justifyContent: 'center', textAlign: 'start' }}>
                        <img src={Manyaa} />
                        <Typography variant="h6" noWrap component="div">
                            <div style={{ fontWeight: 'bold', color: '#004A55' }}>Manyaa</div>
                            <div style={{ fontSize: '16px', color: 'white' }}>We All Need It</div>
                        </Typography>
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ padding: '0px 10px' }}>
                    {menuItems.map((item, index) => (
                        <ListItem
                            key={item.text}
                            disablePadding
                            sx={{ display: 'block' }}
                            selected={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                        >
                            <ListItemButton
                                sx={{
                                    color: location.pathname === item.path ? 'white' : 'black',
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    borderRadius: '10px',
                                    backgroundColor: location.pathname === item.path ? '#7BA3A2' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#7BA3A2',
                                    },
                                    marginTop: '5px',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: location.pathname === item.path ? '#004A55' : 'black'
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
