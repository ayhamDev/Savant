import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import TodoIcon from '@mui/icons-material/ListRounded';
import Menu from '@mui/icons-material/Menu';

import AvatarMenu from "./AvatarMenu"
import isMobile from 'is-mobile';

import SidebarItem from "./SidebarItem"

import LogoWhite from "../assets/img/SavantWhite.svg"
import SmallLogo from "../assets/img/SavantSmall.svg"

import {Home, Close } from '@mui/icons-material';
import { AppBar, Avatar, colors, MenuItem, SwipeableDrawer, Tooltip } from '@mui/material';
import { useTheme } from '@emotion/react';
const drawerWidth = 250;

const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBarDesktop = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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

export default function Dashboard({children,items}: { children: JSX.Element, items: object[] }) {
  const [open, setOpen] = React.useState(isMobile() ? false : false);
  const [ListItems, setListItems] = React.useState(items)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (

    <Box sx={{ display: 'flex',height:"100%" }}>
      {/* SideBar */}
      <CssBaseline />
      { isMobile() ?

        <AppBar variant="outlined" elevation={0} sx={{ bgcolor:'white' , color:"black" }}>
          <Toolbar sx={{ justifyContent: "space-between"}}>

          <IconButton sx={{  p: "10px", color : "#9e9e9e"  ,mr:"5px"}} onClick={open ? handleDrawerClose : handleDrawerOpen} >
                      {open ? <Close  sx={{ color: "#9e9e9e" }} /> : <Menu sx={{ color : "#9e9e9e"}} />}
                      {/* theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> */}
              </IconButton>
              <AvatarMenu />
          </Toolbar>
        </AppBar>
          :
          <AppBarDesktop position="fixed" open={open} variant="outlined" elevation={0} sx={{ bgcolor:'white' , color:"black" }}>
          <Toolbar sx={{ justifyContent: "space-between" , ml: !open ? isMobile() ? "55px" : "65px" : "-10px", transition: "0.5s all" }}>
  
            <IconButton sx={{  p: "10px", color : "#9e9e9e"  ,mr:"5px"}} onClick={open ? handleDrawerClose : handleDrawerOpen} >
                      {open ? <Close  sx={{ color: "#9e9e9e" }} /> : <Menu sx={{ color : "#9e9e9e"}} />}
                      {/* theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> */}
              </IconButton>
              <AvatarMenu />
              {/* <Breadcrumbs sx={{ overflow: "hidden",display: "flex" ,minWidth: "max-content" }} aria-label="breadcrumb">
              <Link underline="none" color="inherit" href="/">
                Cordinator
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs> */}
  
          </Toolbar>
        </AppBarDesktop>
      
    }


      {/* SideBar */}
      {
        isMobile() ?
        <SwipeableDrawer
        disableBackdropTransition={!iOS} disableDiscovery={iOS}
        anchor={"left"}
        open={open}
        onClose={() => {setOpen(false)}}
        onOpen={() =>{setOpen(true)}}
        PaperProps={{ sx: { background: "radial-gradient(circle at 24.1% 68.8%, rgb(45, 35, 35) 0%, rgb(0, 0, 0) 99.4%);" } }}
      >

<DrawerHeader sx={{ pb:"10px"}}>
            <Box sx={{ pt: isMobile() ? "5px" : "10px"  ,width: "100%", height: "100%", display:"grid", placeItems: "center" }}>
              <img src={open ? LogoWhite : SmallLogo} alt="Logo"/>
            </Box>
          </DrawerHeader>
          <Box className="scrollbar">
          <List>
            {
              
              <>
              <SidebarItem role={{ items: [
                {
                  label: "Overview",
                  icon: <Home sx={{ color: colors.grey[500] }} />
                }
              ]}} open={open} />
  
                <SidebarItem role={{ items: [
                {
                  label: "ToDo List",
                  icon: <TodoIcon sx={{ color: colors.grey[500] }} />
                }
              ]}} open={open} />
  
              </>
            }
         
            {
              ListItems.map(role => (
                <SidebarItem key={role.title} role={role} open={open} />
              ))
            }
  
          </List>
          </Box>
      </SwipeableDrawer>
        :
        <Drawer PaperProps={{
          sx: { 
            zIndex: "999999",
            background: "radial-gradient(circle at 24.1% 68.8%, rgb(45, 35, 35) 0%, rgb(0, 0, 0) 99.4%);"
          }
        }} variant="permanent" open={open}>
          <DrawerHeader sx={{ pb:"10px"}}>
            <Box sx={{ pt: isMobile() ? "5px" : "10px"  ,width: "100%", height: "100%", display:"grid", placeItems: "center" }}>
              <img src={open ? LogoWhite : SmallLogo} alt="Logo"/>
            </Box>
          </DrawerHeader>
          <Box className="scrollbar">
          <List>
            {
              
              <>
              <SidebarItem role={{ items: [
                {
                  label: "Overview",
                  icon: <Home sx={{ color: colors.grey[500] }} />
                }
              ]}} open={open} />
  
                <SidebarItem role={{ items: [
                {
                  label: "ToDo List",
                  icon: <TodoIcon sx={{ color: colors.grey[500] }} />
                }
              ]}} open={open} />
  
              </>
            }
         
            {
              ListItems.map(role => (
                <SidebarItem key={role.title} role={role} open={open} />
              ))
            }
  
          </List>
          </Box>
        </Drawer>

      }


        {/* Main */}
      <Box className="scrollbar" component="main" sx={{ flexGrow: 1 , pt: "75px",pb:"5px" ,height: "100%" ,bgcolor:colors.grey[100]}}>

          <Box sx={{px: "20px"}}>
            { children }
          </Box>
      </Box>
    </Box>
  );
}