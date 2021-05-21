import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import RegisterAlumno from "../../components/register/alumno/RegisterAlumno";

const RegisterAlumnoPage = () => {
  const [getState, setState] = useState();

  return (
    <div>
      <NavBar />
      <RegisterAlumno />
      <Footer />
    </div>
  );
};

export default RegisterAlumnoPage;
