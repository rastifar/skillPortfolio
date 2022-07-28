import React, { useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { skillContext } from "../context/SkillContextProvider";
import { Button } from "@mui/material";

const Footer = ({handleShow}) => {

  return (
    <div>
      <BottomNavigation showLabels spacing="2" position="static">       
        <BottomNavigationAction
         onClick={() => handleShow("all")}
          label="All"
         
          sx={{ fontSize: "1.5rem" }}
        />
        <BottomNavigationAction
         onClick={() => handleShow("webDesign")}
          label="Web Design"
          
        />
        <BottomNavigationAction
           onClick={() => handleShow("frontEnd")}
          label="Front End"
         
        />
        <BottomNavigationAction
          onClick={() => handleShow("backEnd")}
          label="Back End"
          
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
