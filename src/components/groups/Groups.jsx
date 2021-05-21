import { Table, Space } from "antd";
import React, { useEffect, useState, createContext, useContext } from "react";
import { User } from "../../App";
import axios from "../common/http";
import swal from "sweetalert";
import carga from "../../assets/img/load/ajax-loader.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes, faEye } from "@fortawesome/free-solid-svg-icons";

import { CreateButton, TableWrapper } from "./Groups.styled";

const columns = [
  {
    title: "Grupo",
    dataIndex: "grupo",
    sorter: (a, b) => a.grupo - b.grupo,
  },
  {
    title: "Profesor",
    dataIndex: "profesor",
    sorter: (a, b) => a.profesor - b.profesor,
  },
  {
    title: "",
    key: "accion",
    render: () => (
      <Space size="middle">
        <a href="http://localhost:3000/grupos" title="Ver">
          <FontAwesomeIcon icon={faEye} className="view-icon" />
        </a>
        <a href="http://localhost:3000/grupos" title="Editar">
          <FontAwesomeIcon icon={faEdit} className="view-icon" />
        </a>
        <a href="http://localhost:3000/grupos" title="Eliminar">
          <FontAwesomeIcon icon={faTimes} className="delete-icon" />
        </a>
      </Space>
    ),
  },
];

const data = [];

const showHeader = true;

const pagination = { position: "bottom" };

const Grupos = () => {
  const { token } = useContext(User);
  const [datos1, setDatos1] = useState();

  const array1 = [];

  useEffect(async () => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      await axios
        .get(
          "group-usuario" //,
          // {},
          // {
          //   headers: {
          //     Authorization: "Bearer " + localStorage.getItem("token"),
          //   },
          // }
        )
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data, response.data.length);
            for (let i = 0; i < response.data.length; i++) {
              //console.log(response.data[i]);
              array1.push({
                key: i,
                nombre: response.data[i].nombre,
                apellidos: response.data[i].apellidos,
                email: response.data[i].email,
                id_grupo: response.data[i].id_grupo,
                grupo: response.data[i].nombre_grupo,
              });
            }
            //console.log(array1);

            //history.push("/");
          }
        })
        .catch(function (error) {
          if (error.status == 401) {
            swal({
              title: "Error acceso " + error.response.status,
              text: "Error, no tienes acceso a esta sección.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          } else {
            swal({
              title: "Error interno " + error.response.status,
              text: "Error interno, vuelve a intentarlo en unos momentos.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          }
        });
      //if (usuarioLogeado.id_profesor) {
      //} else {
      //console.log("ALUMNO");
      //columns.splice(5);
      //}
    }
    //console.log(array1);
    //console.log(array1);
    setDatos1(array1);
  }, []);

  const [state, setState] = useState({
    bordered: false,
    loading: false,
    pagination,
    size: "default",
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: "fixed",
    top: "none",
    bottom: "bottomRight",
    xScroll: false,
    yScroll: false,
  });
  var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
  var hola = "Estos son los datos de tu grupo.";
  if (JSON.parse(usuarioLogeado.id_profesor)) {
    columns.splice(1);
    hola = "Estos son los grupos que hay registrados.";
  }

  const handleDataChange = (hasData) => {
    this.setState({ hasData });
  };

  const scroll = {};
  if (state.yScroll) {
    scroll.y = 240;
  }
  if (state.xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis: state.ellipsis,
  }));
  if (state.xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const nombreUsu = localStorage.getItem("user").username;

  const mensajeGrupo = () => {
    var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
    if (array1[0].grupo) {
      return (
        usuarioLogeado.username +
        " estas en el grupo " +
        array1[0].grupo +
        " con estos otros usuarios."
      );
    } else {
      return usuarioLogeado.username + " no estás asignado en ningún grupo.";
    }
  };

  return (
    <TableWrapper>
      <CreateButton>+ Crear grupo</CreateButton>
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={state.hasData ? data : null}
        scroll={scroll}
        className="groups-table"
      />
    </TableWrapper>
  );
};

export default Grupos;
