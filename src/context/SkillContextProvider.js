import React, { createContext, useState } from "react";

export const skillContext = createContext();

const initialvalue = [
  {
    id: "html",
    title: "HTML",
    description:
      "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    skills: "Web Design",
  },
  {
    id: "css",
    title: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. ",
    skills: "Web Design",
  },
  {
    id: "javaScript",
    title: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification ",
    skills: "Front-End",
  },
  {
    id: "reactJS",
    title: "ReactJS",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. ",
    skills: "Front-End",
  },
  {
    id: "nodeJS",
    title: "NodeJS",
    description:
      "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.",
    skills: "Back-End",
  },
  {
    id: "mongoDB",
    title: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program.",
    skills: "Back-End",
  },
];

const SkillContextProvider = ({ children }) => {
  const [userSkills, setUserSkills] = useState(initialvalue);
  const [currentSkill, setCurrentSkill] = useState({});

  const value = {
    currentSkill,
    setSkill: (item) => {
      setCurrentSkill(item);
    },
    userSkills,
    addSkill: (item) => {
      console.log(item);
      setUserSkills((prevSkill) => {
        if (
          prevSkill.find(
            (skill) =>
              skill.title.toLocaleLowerCase() === item.title.toLocaleLowerCase()
          )
        ) {
          return prevSkill;
        }
        return [...prevSkill, item];
      });
    },
    editSkill: (item) => {
      console.log(item);
      const updatedSkill = userSkills.filter((skill) => skill.id !== item.id);
      setUserSkills([...updatedSkill, item]);
    },
    deleteSkill: (id) => {
      setUserSkills(userSkills.filter((item) => item.id !== id));
    },
  };

  return (
    <skillContext.Provider value={value}>{children}</skillContext.Provider>
  );
};

export default SkillContextProvider;
