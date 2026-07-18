import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import * as React from "react";
import Drawer from '@mui/material/Drawer';
import { Link, useLocation} from "react-router-dom";
import {PAGES, TITLE} from "./pages.ts";
// import WhatshotIcon from '@mui/icons-material/Whatshot';


function TopBar() {

    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setOpen(open);
            };

    const list = (
        <Box
            sx={{
                width: 'auto',
                color: "primary.contrastText",
                backgroundColor: "primary.main",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {PAGES.filter((p) => !p.additional).map((page) => (
                    <ListItem key={page.path} disablePadding>
                        <ListItemButton component={Link} to={page.path}>
                            <ListItemIcon>
                                {page.icon && <page.icon sx={{ color: "primary.contrastText"}} />}
                            </ListItemIcon>
                            <ListItemText primary={page.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ borderColor: "primary.contrastText" }} />
            <List>
                {PAGES.filter((p) => p.additional).map((page) => (
                    <ListItem key={page.path} disablePadding>
                        <ListItemButton component={Link} to={page.path}>
                            <ListItemIcon>
                                {page.icon && <page.icon sx={{ color: "primary.contrastText"}} />}
                            </ListItemIcon>
                            <ListItemText primary={page.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<WhatshotIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            {list}
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h1"
                        noWrap
                        sx={{
                            flexGrow: { sm: 1, md: 0 },
                            mr: 2,
                            display: { xs: 'none', sm: 'flex' },
                            color: 'inherit',
                        }}
                    >
                        {TITLE}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES.map((page) => {
                            const isActive = location.pathname === page.path;

                            return (
                                <Button
                                    key={page.path}
                                    to={page.path}
                                    component={Link}
                                    sx={{
                                        my: 2,
                                        borderRadius: 2,
                                        color: isActive ? 'primary.main' : 'primary.contrastText',
                                        backgroundColor: isActive ? 'primary.contrastText' : 'primary.main',
                                        display: 'flex',
                                        justifyContent: 'center',   // ← центрирование текста
                                        alignItems: 'center'        // ← на всякий случай
                                    }}
                                >
                                    {page.label}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {PAGES.filter((p) => p.path == "/contacts").map((page) => (
                            <Button
                                key={page.path}
                                to={page.path}
                                component={Link}
                                variant="contained"
                                sx={{
                                    my: 2,
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    backgroundColor: "primary.light",
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                            >
                                Записаться
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default TopBar;