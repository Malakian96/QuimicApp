import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { User } from "../../App";
import carga from "../../assets/img/load/ajax-loader.gif";
import swal from "sweetalert";
import { render } from "react-dom";

const Logout = () => {
  const history = useHistory();
  const { setUser } = useContext(User);

  const salir = async () => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      axios
        .post(
          "logout",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            swal({
              title: "Esperamos volver a verte",
              text: "  ",
              icon: "success",
              button: false,
              timer: "1800",
            });

            //localStorage.removeItem("token");
            localStorage.clear();
            //localStorage.removeItem("user");

            setUser(null);

            //history.push("/login");
            window.location = "/login";
          }
        })
        .catch(function (error) {
          swal({
            title: "Error interno " + error.response.status,
            text: "Error interno, vuelve a intentarlo en unos momentos.",
            icon: "error",
            button: "Aceptar",
            timer: "3000",
          });
          history.push("/login");
        });
    } else {
      swal({
        title: "Gracias por todo!",
        text: "Ya has salido.",
        button: "Aceptar",
        timer: "3000",
      });
      history.push("/login");
    }
  };

  // componentDidMount() {
  //   console.log("Holaaaaa");
  // };

  return (
    <>
      <h1>Error al cargar</h1>
      {salir()}
    </>
  );
};

export default Logout;
