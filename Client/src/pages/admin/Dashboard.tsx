import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavigateNext from '@mui/icons-material/NavigateNext';

import LogoWhite from "../../assets/img/SavantWhite.svg"
import SmallLogo from "../../assets/img/SavantSmall.svg"

import { Scrollbars } from 'react-custom-scrollbars';

import {SchoolRounded, AttachMoneyRounded, Home,PeopleAltRounded, BusinessCenterRounded,WidgetsRounded,ClassRounded,AccountBoxRounded } from '@mui/icons-material';
import { colors } from '@mui/material';
const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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


const AppBar = styled(MuiAppBar, {
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

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [ListItems, setListItems] = React.useState([
    {
    title: "Coordinator",
    items: [
      { label: "Student",
       icon: <SchoolRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Teacher",
       icon: <PeopleAltRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Employee",
       icon: <BusinessCenterRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Major",
       icon: <WidgetsRounded sx={{ color: colors.grey[500] }}  /> 
      },
      { label: "Class",
       icon: <ClassRounded sx={{ color: colors.grey[500] }}  /> 
      },
    ]
    },
    {
      title: "Financial",
      items: [
        { label: "Income & Expence" , 
        icon: <AttachMoneyRounded sx={{ color: colors.grey[500] }} /> 
        },
        { label: "Human Resources",
        icon: <AccountBoxRounded sx={{ color: colors.grey[500] }}  /> 
        },
      ]
    },
    {
    title: "CMS",
    items: [
      { label: "Website" , 
      icon: <AttachMoneyRounded sx={{ color: colors.grey[500] }} /> 
      },
      { label: "Data",
      icon: <AccountBoxRounded sx={{ color: colors.grey[500] }}  /> 
      },
    ]
  },



])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* SideBar */}
      <AppBar position="fixed" open={open} variant="outlined" elevation={0} sx={{ bgcolor:'white' , color:"black" }}>
        <Toolbar sx={{ ml: !open ? "55px" : "-10px", transition: "0.5s all" }}>

          <IconButton sx={{  p: "10px", color : "#9e9e9e"  ,mr:"5px"}} onClick={open ? handleDrawerClose : handleDrawerOpen} >
                    {open ? <ChevronLeftIcon sx={{ color: "#9e9e9e" }} /> : <ChevronRightIcon sx={{ color : "#9e9e9e"}} />}
                    {/* theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> */}
                </IconButton>
          <Breadcrumbs sx={{ overflow: "hidden",display: "flex" ,minWidth: "max-content" }} aria-label="breadcrumb">
            <Link underline="none" color="inherit" href="/">
              Cordinator
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
        </Toolbar>
      </AppBar>

      {/* SideBar */}
      <Drawer PaperProps={{
        sx: { bgcolor: "#212121", zIndex: "2000"}
      }} variant="permanent" open={open}>
        <DrawerHeader sx={{ pb:"10px"}}>
          <Box sx={{ pt:"10px" ,width: "100%", height: "100%", display:"grid", placeItems: "center" }}>
            <img src={open ? LogoWhite : SmallLogo} alt="Logo"/>
          </Box>
        </DrawerHeader>
        <Scrollbars
        autoHide
        universal={true}
        autoHideTimeout={400}
        autoHideDuration={200}
        renderThumbVertical={() => (
          <Box sx={{ bgcolor: colors.grey[600] }} ></Box>
        )}
        style={{ width: "100%", height: "calc(100% - 80px)" }}>
        <Box>
        <List>
          {
            open ? <ListItem sx={{ color: colors.grey[300] }}>
            <ListItemButton selected={false} sx={{ borderRadius: "10px"}}>
              <ListItemIcon  sx={{
                  minWidth: 0,
                  mr: open ? 1.5 : 'auto',
                  justifyContent: 'center',
                }}>
                  <Home sx={{ color: colors.grey[500] }}/>
              </ListItemIcon>
              <ListItemText primary={"Overview"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          :
          <ListItem disablePadding sx={{ display: 'block',color: colors.grey[300],p:"5px 10px" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "15px",
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <Home sx={{ color: colors.grey[500] }}/>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
          }
       
          {
            open ?
            ListItems.map(role => (
              <Box key={role.title} sx={{ userSelect:"none", width: "100%", mb: "15px" }}>
                <ListItem sx={{ pb: 0 }}>
                  <ListItemText sx={{ color: colors.grey[200], opacity: 0.5}} primary={role.title} />
                </ListItem>
                <Box>
                  {role.items.map((item,index) => (
                      <ListItem sx={{ color: colors.grey[300]}} key={index}>
                        <ListItemButton sx={{ borderRadius: "10px" }}>
                          <ListItemIcon  sx={{
                              minWidth: 0,
                              mr: open ? 1.5 : 'auto',
                              justifyContent: 'center',
                            }}>
                              { item.icon }  
                          </ListItemIcon>
                          <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                </Box>
              

              </Box>
            ))
            : 
            ListItems.map(role => (
              <Box key={role.title}>
              <Divider style={{ background: "#d9d9d9",opacity: 0.2 }} />
              {
              role.items.map((item,index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block',color: colors.grey[300],p:"5px 10px" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "15px",
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
  
              ))
              }

              </Box>

            )) 
          }
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))} */}

           
         
        </List>
        </Box>
        </Scrollbars>

      </Drawer>

        {/* Main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}