import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import RegisterProfesor from "../../components/register/profesor/RegisterProfesor.jsx";

const RegisterProfesorPage = () => {
  const [getState, setState] = useState();

  return (
    <div>
      <NavBar />
      <RegisterProfesor />
      <Footer />
    </div>
  );
};

export default RegisterProfesorPage;
