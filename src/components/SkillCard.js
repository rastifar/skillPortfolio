import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  IconButton,
  ListItemButton,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { skillContext } from "../context/SkillContextProvider";
import InboxIcon from "@mui/icons-material/Inbox";

const SkillCard = ({ title, items, setShowEdit }) => {
  //context variable
  const { deleteSkill, editSkill, setSkill,currentSkill } = useContext(skillContext);

  const handleShow = (item) => {
    setSkill(item);
    setShowEdit(false);
  };
  const handleEdit = (item) => {
    setSkill(item);
    setShowEdit(true);
   
  };
  const handleDelete = (item) => {
    setSkill('');
    setShowEdit(false);
    deleteSkill(item.id);
  };

  return (
    <div>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <List component="ul">
        {items?.map((item) => (
          <ListItem  key={item.title}>
            <ListItemButton>
              <ListItemText
                primary={item.title}
                onClick={() => handleShow(item)}
              />
              <IconButton onClick={() => handleEdit(item)}>
                <EditIcon />
              </IconButton>

              <IconButton onClick={() => handleDelete(item)}>
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SkillCard;

 

