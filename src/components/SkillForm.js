import React, { useContext } from "react";
import { MenuItem, TextField, InputLabel, Button } from "@mui/material";
import { skillContext } from "../context/SkillContextProvider";

const SkillForm = ({ action }) => {
  const { currentSkill, editSkill, setSkill, setCurrentSkill,addSkill } =
    useContext(skillContext);

  const handleChange = (e) => {
    setSkill({ ...currentSkill, [e.target.name]: e.target.value });
  };
 

const handleEdit = () => {  
  editSkill(currentSkill)
}
  return (
    <>
      <TextField
        name="title"
        fullWidth
        required
        color="primary"
        label="Title"
        variant="standard"
        sx={{ my: ".9rem" }}
        onChange={handleChange}
        value={currentSkill.title}
      />

      <InputLabel id="selectSkills">Skills</InputLabel>
      <TextField
        select
        name="skills"
        fullWidth
        required
        label="Skills"
        variant="standard"
        labelId="selectSkills"
        sx={{ my: "1rem" }}
        color="primary"
        onChange={handleChange}
        value={currentSkill.skills}
      >
        <MenuItem value={"Web Design"}>Web Design</MenuItem>
        <MenuItem value={"Front-End"}>Front End</MenuItem>
        <MenuItem value={"Back-End"}>Back End</MenuItem>
      </TextField>

      <TextField
        name="description"
        fullWidth
        required
        multiline
        rows={4}
        label="Description"
        color="primary"
        variant="standard"
        sx={{ my: ".5rem" }}
        onChange={handleChange}
        value={currentSkill.description}
      />
      <Button onClick={handleEdit}>Edit</Button>
    </>
  );
};

export default SkillForm;
