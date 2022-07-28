import React, { useContext, useReducer, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
  Select,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import { AddCircleOutline, SettingsSuggestRounded } from "@mui/icons-material";
import { skillContext } from "../context/SkillContextProvider";

const AddSkillModal = (props) => {
  //context
  const { addSkill, skills, editSkill } = useContext(skillContext);
  // const { open, setOpen } = useContext(showModal);
  //App variable
  const refTitle = useRef();
  const refDesc = useRef();
  const refSkill = useRef();
  //Modal variable
  const [open, setOpen] = React.useState(false);

  const [skill, setSkill] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addSkill({
      id: refTitle.current.value.toLowerCase(),
      title: refTitle.current.value,
      description: refDesc.current.value,
      skills: refSkill.current.value,
    });
    handleClose();
  };
  
  return (
    <div>
      <AddCircleOutline
        onClick={handleClickOpen}
        sx={{ color: "yellow", fontSize: "3.5rem" }}
      />

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {props.showTitle ? (
          <DialogTitle id="responsive-dialog-title">
            {"Create a New Skills"}

            <Typography color="inherit" sx={{ mt: "1rem" }}>
              Please fill out the form below.
            </Typography>
          </DialogTitle>
        ) : (
          ""
        )}
        <DialogContent>
          <DialogContentText>
            <TextField
              inputRef={refTitle}
              fullWidth
              required
              color="primary"
              label="Title"
              variant="standard"
              sx={{ my: ".5rem" }}
              // onChange={handleChange}
              // value={props.action==="Create"?"":"edit"}
            />
            <FormControl fullWidth>
              <InputLabel id="selectSkills">Skills</InputLabel>
              <Select
                inputRef={refSkill}
                fullWidth
                required
                label="Skills"
                variant="standard"
                labelId="selectSkills"
                sx={{ my: "1rem" }}
                color="primary"
                // onChange={handleChange}
                // value={props.action==="Create"?"":"Web Design"}
              >
                <MenuItem value={"Web Design"}>Web Design</MenuItem>
                <MenuItem value={"Front-End"}>Front End</MenuItem>
                <MenuItem value={"Back-End"}>Back End</MenuItem>
              </Select>
            </FormControl>
            <TextField
              inputRef={refDesc}
              fullWidth
              required
              multiline
              rows={4}
              label="Description"
              color="primary"
              variant="standard"
              sx={{ my: ".5rem" }}
              // onChange={handleChange}
              // value={props.action==="Create"?"":"edit"}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} sx={{ mr: "auto" }}>
            {props.action}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddSkillModal;
