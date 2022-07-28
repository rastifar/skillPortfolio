import { AppBar, Toolbar,IconButton,Typography,Button } from "@mui/material";
import React,{useContext, useEffect} from "react";
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from "react-router-dom";



const Dashbord = () => {
  // const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    // setIsLoggedIn(false)
    window.localStorage.removeItem('token');
    navigate('/',{replace:true})

  }
  
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashbord
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashbord;
