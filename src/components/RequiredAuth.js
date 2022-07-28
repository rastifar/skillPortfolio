import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";


const RequiredAuth = (props) => {
  
  //Authentication with context
  // const { isLoggedIn } = useContext(AuthContext);  
  // if (!isLoggedIn) {
  //   alert("Please login first");
  //   return <Navigate to="/login" state={location.pathname} />;
  // }
  
  //Authentication with token in local Storage
  const isLoggedin = localStorage.getItem('token');
  const location = useLocation();
   if (!isLoggedin) {
    alert("Please login first");
    return <Navigate to="/login" state={location.pathname} />;
  }
  return <div>{props.children}</div>;
};

export default RequiredAuth;
