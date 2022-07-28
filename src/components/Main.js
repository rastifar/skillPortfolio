import React, { useContext, useState } from "react";
import { skillContext } from "../context/SkillContextProvider";
import SkillCard from "./SkillCard";
import { Typography, Grid } from "@mui/material";
import SkillForm from "./SkillForm";

const Main = ({ showWebDesign, showFrontEnd, showBackEnd }) => {
  //context variable
  const { userSkills, currentSkill } = useContext(skillContext);

  //Main variable
  const [showEdit, setShowEdit] = useState(false);

  //to group the skills based on 3 categories:'backEnd','fronEnd','webDesign'
  const skillCategorized = userSkills.reduce((groupedSkills, skill) => {
    const group = skill.skills;
    if (groupedSkills[group] == null) groupedSkills[group] = [];
    groupedSkills[group].push(skill);
    return groupedSkills;
  }, {});

  const closeEdit = () => {
    setShowEdit(false);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ background: "pink", mt: "1px" }}
      >
        <Grid item xs={12} md={6} sx>
          {showWebDesign && (
            <SkillCard
              title="Web Desing"
              items={skillCategorized["Web Design"]}
              setShowEdit={setShowEdit}
            />
          )}
          {showFrontEnd && (
            <SkillCard
              title="Front-End"
              items={skillCategorized["Front-End"]}
              setShowEdit={setShowEdit}
            />
          )}
          {showBackEnd && (
            <SkillCard
              title="Back-End"
              items={skillCategorized["Back-End"]}
              setShowEdit={setShowEdit}
            />
          )}
        </Grid>
        {!showEdit ? (
          <Grid item xs={12} md={6}>
            {Object.keys(currentSkill).length !== 0 ? (
              <Typography
                variant="h3"
                sx={{ textAlign: "center", mt: "2rem" }}
              >
                {currentSkill.title}
                <Typography sx={{ mt: "2rem" }}>
                  {currentSkill.description}
                </Typography>
              </Typography>
            ) : (
              <Typography
                variant="h3"
                sx={{ textAlign: "center", flexGrow: 1, mt: "2rem" }}
              >
                Welcome!
                <Typography>
                  Please select an exercise from the list on the left side.
                </Typography>
              </Typography>
            )}
          </Grid>
        ) : (
          <Grid item xs={12} md={6}>
            <SkillForm action="Edit"/>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Main;

// {!showEdit ? (
//   <Grid item xs={12} md={6}>
//     {/* <Paper sx={{height:'100%'}}> */}
//     { Object.keys(currentSkill).length !== 0 ? (
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center", mt: "1.5rem" }}
//       >
//         {currentSkill.title}
//         <Typography sx={{ mt: "1.5rem" }}>
//           {currentSkill.description}
//         </Typography>
//       </Typography>
//     ) : (
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center", flexGrow: 1, mt: "1.5rem" }}
//       >
//         Welcome!
//         <Typography>
//           Please select an exercise from the list on the left side.
//         </Typography>
//       </Typography>
//     )}
//     {/* </Paper> */}
//   </Grid>
// ) : (
//   <Grid item xs={12} md={6}>
//     <TextField
//       fullWidth
//       required
//       color="primary"
//       label="Title"
//       variant="standard"
//       sx={{ my: ".5rem" }}
//       // onChange={handleChange}
//       value={currentSkill.title}
//     />
//     <FormControl fullWidth>
//       <InputLabel id="selectSkills">Skills</InputLabel>
//       <Select
//         fullWidth
//         required
//         label="Skills"
//         variant="standard"
//         labelId="selectSkills"
//         sx={{ my: "1rem" }}
//         color="primary"
//         // onChange={handleChange}
//         value={currentSkill.skills}
//       >
//         <MenuItem value={"Web Design"} >
//           Web Design
//         </MenuItem>
//         <MenuItem value={"Front-End"} >
//           Front End
//         </MenuItem>
//         <MenuItem value={"Back-End"} >
//           Back End
//         </MenuItem>
//       </Select>
//     </FormControl>
//     <TextField
//       fullWidth
//       required
//       multiline
//       rows={4}
//       label="Description"
//       color="primary"
//       variant="standard"
//       sx={{ my: ".5rem" }}
//       // onChange={handleChange}
//       value={currentSkill.description}
//     />
//   </Grid>
// )}

// {!showEdit ? (
//   <Grid item xs={12} md={6}>
//     {/* <Paper sx={{height:'100%'}}> */}
//     {skill ? (
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center", mt: "1.5rem" }}
//       >
//         {skill.title}
//         <Typography sx={{ mt: "1.5rem" }}>
//           {skill.description}
//         </Typography>
//       </Typography>
//     ) : (
//       <Typography
//         variant="h3"
//         sx={{ textAlign: "center", flexGrow: 1, mt: "1.5rem" }}
//       >
//         Welcome!
//         <Typography>
//           Please select an exercise from the list on the left side.
//         </Typography>
//       </Typography>
//     )}
//     {/* </Paper> */}
//   </Grid>
// ) : (
//   <Grid item xs={12} md={6}>
//     <TextField
//       fullWidth
//       required
//       color="primary"
//       label="Title"
//       variant="standard"
//       sx={{ my: ".5rem" }}
//       onChange={handleChange}
//       value={skill.title}
//     />
//     <FormControl fullWidth>
//       <InputLabel id="selectSkills">Skills</InputLabel>
//       <Select
//         fullWidth
//         required
//         label="Skills"
//         variant="standard"
//         labelId="selectSkills"
//         sx={{ my: "1rem" }}
//         color="primary"
//         onChange={handleChange}
//         value={skill.skills}
//       >
//         <MenuItem value={"Web Design"} >
//           Web Design
//         </MenuItem>
//         <MenuItem value={"Front-End"} >
//           Front End
//         </MenuItem>
//         <MenuItem value={"Back-End"} >
//           Back End
//         </MenuItem>
//       </Select>
//     </FormControl>
//     <TextField
//       fullWidth
//       required
//       multiline
//       rows={4}
//       label="Description"
//       color="primary"
//       variant="standard"
//       sx={{ my: ".5rem" }}
//       onChange={handleChange}
//       value={skill.description}
//     />
//   </Grid>
// )}
