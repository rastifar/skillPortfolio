import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import SkillContextProvider from "../context/SkillContextProvider";

const Resume = () => {
  const [showWebDesign, setShowWebDesign] = useState(true);
  const [showFrontEnd, setShowFrontEnd] = useState(true);
  const [showBackEnd, setShowBackEnd] = useState(true);

  const handleShow = (name) => {
    switch (name) {
      case "webDesign":
        setShowFrontEnd(false);
        setShowBackEnd(false);
        setShowWebDesign(true);
        break;
      case "frontEnd":
        setShowWebDesign(false);
        setShowBackEnd(false);
        setShowFrontEnd(true);
        break;
      case "backEnd":
        setShowFrontEnd(false);
        setShowWebDesign(false);
        setShowBackEnd(true);
        break;

      default:
        setShowBackEnd(true);
        setShowFrontEnd(true);
        setShowWebDesign(true);
        break;
    }
  };
  return (
    <div>
      <SkillContextProvider>
        <Header />
        <Main
          showWebDesign={showWebDesign}
          showFrontEnd={showFrontEnd}
          showBackEnd={showBackEnd}
        />

        <Footer handleShow={handleShow} />
      </SkillContextProvider>
    </div>
  );
};

export default Resume;
