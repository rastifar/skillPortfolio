import {
  AppBar,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState,useContext } from "react";
import AddSkillModal from "./AddSkillModal";

import { Link } from "react-router-dom";

const Header = () => {

 
  return (
    <div>
      <AppBar position="static">
        <Toolbar>         
          <Button color="inherit">
            <Link
              to="/dashbord"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Dashbord
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>
          </Button>

          <Typography
            variant="h3"
            sx={{ textAlign: "center", flexGrow: 1, mt: "1.5rem" }}
          >
            <Typography>My skills within</Typography>
            Material UI
          </Typography>

          <Button color="inherit" >
            {" "}
            <AddSkillModal action="Create" showTitle={true} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
