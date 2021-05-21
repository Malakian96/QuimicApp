import React, { useContext } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import styled from "styled-components";
import { User } from "../../App";
import SideNavBar from "../../components/common/sideNav/SideNav";

const Heading = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const HomePage = () => {
  const { user } = useContext(User);

  const msg = user ? (
    <Heading>Bienvenido {user.username}</Heading>
  ) : (
    <>
      <style></style>
      <Heading>No estás logueado</Heading>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm jordi.</h1>
          <h3>
            I'm a tal based <span>sssss</span>. ssssssss.
          </h3>
          <hr />
          <ul className="social">sdsdsdsdsdsd</ul>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <SideNavBar />
      {msg}
    </div>
  );
};

export default HomePage;
