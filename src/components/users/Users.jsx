import { Table, Space } from "antd";
import React, { useEffect, useState, createContext, useContext } from "react";
import { User } from "../../App";
import axios from "../common/http";
import swal from "sweetalert";
import carga from "../../assets/img/load/ajax-loader.gif";
import { CreateButton, TableWrapper } from "./Users.styled";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes, faKey } from "@fortawesome/free-solid-svg-icons";

// import { Link, useHistory } from "react-router-dom";

// const history = useHistory();
const columns = [
  {
    title: "Usuario",
    dataIndex: "nombreUsuario",
    //sorter: (a, b) => a.nombreUsuario - b.nombreUsuario,
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
    //sorter: (a, b) => a.nombre - b.nombre,
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
    //sorter: (a, b) => a.apellidos - b.apellidos,
  },
  {
    title: "Grupo",
    dataIndex: "grupo",
    //sorter: (a, b) => a.grupo - b.grupo,
  },
  {
    title: "Email",
    dataIndex: "email",
    //sorter: (a, b) => a.email - b.email,
  },
  {
    title: "Rol",
    dataIndex: "rol",
    //sorter: (a, b) => a.rol - b.rol,
  },
  {
    title: "",
    key: "accion",
    width: 300,
    dataIndex: "accion",
    render: (text, record) => (
      <Space size="middle">
        <a
          title="Contraseña"
          onClick={(e) => {
            onUpPassUni(record.nombre, record.apellidos, record.idUsuario);
          }}
        >
          <FontAwesomeIcon icon={faKey} className="view-icon" />
        </a>

        <a
          href="http://localhost:3000/usuarios"
          title="Editar"
          onClick={(e) => {
            onUpdate(
              record.id,
              record.nombre,
              record.apellidos,
              record.email,
              record.nombreUsuario,
              record.idUsuario,
              record.rol,
              record.id_grupo,
              record.grupo,
              e
            );
          }}
        >
          <FontAwesomeIcon icon={faEdit} className="edit-icon" />
        </a>
        <a
          href="http://localhost:3000/usuarios"
          title="Eliminar"
          onClick={(e) => {
            onDelete(record.idUsuario);
          }}
        >
          <FontAwesomeIcon icon={faTimes} className="delete-icon" />
        </a>
      </Space>
    ),
  },
];

const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     nombre: "profesor",
//     apellidos: `profesor`,
//     rol: `${i % 2 ? "Profesor" : "Alumno"}`,
//   });
// }

const onCreateBut = () => {
  const usuarioLogeado = JSON.parse(localStorage.getItem("user"));

  if (usuarioLogeado) {
    if (usuarioLogeado.id_profesor) {
      return (
        <CreateButton
          className="btn "
          onClick={(e) => {
            onCreate();
          }}
        >
          + Crear usuario
        </CreateButton>
      );
    } else {
    }
  }
};

const onUpPass = async () => {
  const usuarioLogeado = JSON.parse(localStorage.getItem("user"));
  if (usuarioLogeado.id_profesor) {
    //seleccionar usuario, si es admin el conectado también a profesores
  } else {
    //petición de su contraseña
  }
};

const petActPw = async (idUsuario) => {
  swal({
    title: "Se enviará un mail al usuario para que se valide ...",
    icon: carga,
    button: false,
    allowOutsideClick: false,
  });
  await axios
    .get(`update-pw/${idUsuario}`)
    .then((response) => {
      //console.log(response.data);
      if (response.status >= 200 && response.status <= 205) {
        //console.log(response.data[1].nombre);
        //console.log(response.data);
        window.location.reload(true);
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
};

const onUpPassUni = async (nombre, apellido, idUsuario) => {
  Swal.fire({
    title: "Solicitud de nueva contraseña",
    html: `¿ Seguro que deseas solicitar una nueva contraseña para <b> ${nombre} ${apellido} </b> ?<br>&nbsp;<br>
    Esta acción dejará el usuario inhabilitado hasta que actualice su contraseña.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Solicitar",
    cancelButtonText: "Cancelar",
    focusConfirm: false,
  }).then((result) => {
    if (result.isConfirmed) {
      petActPw(idUsuario);
    } else {
      //swal("Cancelado");
    }
  });
};

const onCreate = async () => {
  const usuarioLogeado = JSON.parse(localStorage.getItem("user"));

  // let adm = `<input type="hidden" class="swal2-input" id='Eadmin'>`;
  let tipo = `<option value="al" selected="">Alumno</option>`;
  if (usuarioLogeado.es_admin) {
    tipo = `<option value="al" selected="">Alumno</option>
    <option value="pr">Profesor</option>`;
  }

  const grupos = await groups("Profesor", 0, "");
  var peticion = [];
  var ruta = "";

  Swal.fire({
    title: "Crear usuario",
    html: `<label for='EnombreUsuario'>Nombre inicio sesión:</label>
    <input class="swal2-input" id='EnombreUsuario' type='text' placeholder="Nombre usuario">
    <label for='Epassword'>Password:</label>
    <input class="swal2-input" id='Epassword' type='password' placeholder="Contraseña">
    <label for='Enombre'>Nombre:</label>
    <input class="swal2-input" id='Enombre' type='text' placeholder="Nombre">
    <label for='Eapellidos'>Apellidos:</label>
    <input class="swal2-input" id='Eapellidos' type='text' placeholder="Apellidos">
    <label for='Eemail'>Email:</label>
    <input class="swal2-input" id='Eemail' type='email' placeholder="Email">
    <label for="Etipo">Tipo usuario:</label><br>
    <select class="swal2-input" id="Etipo">
    ${tipo}
    </select>`, //${grupos}
    // <input id='Eprofe' type='checkbox'>
    // <label class="swal2-input" for='Eprofe'>&nbsp;Es profesor</label><br>
    // <input id='Eadmin' type='checkbox'>
    // <label class="swal2-input" for='Eadmin'>&nbsp;Es admin</label>
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Crear",
    cancelButtonText: "Cancelar",
    focusConfirm: false,
    preConfirm: () => {
      const Enombre = Swal.getPopup().querySelector("#Enombre").value;
      const Eapellidos = Swal.getPopup().querySelector("#Eapellidos").value;
      const Eemail = Swal.getPopup().querySelector("#Eemail").value;
      const EnombreUsuario =
        Swal.getPopup().querySelector("#EnombreUsuario").value;
      const Epassword = Swal.getPopup().querySelector("#Epassword").value;
      const Etipo = Swal.getPopup().querySelector("#Etipo").value;
      //const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
      //alert(Egrupo);
      //const Eprofe = Swal.getPopup().querySelector("#Eprofe").checked;
      //const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
      if (!Enombre || !Eapellidos || !Eemail || !EnombreUsuario || !Epassword) {
        Swal.showValidationMessage(`Algún campo obligatorio vacío`);
      } else if (EnombreUsuario.length < 6 || Epassword.length < 6) {
        Swal.showValidationMessage(
          `Nombre de usuario o password inferior a 6 digitos`
        );
      }
      return {
        Enombre: Enombre,
        Eapellidos: Eapellidos,
        Eemail: Eemail,
        EnombreUsuario: EnombreUsuario,
        Epassword: Epassword,
        Etipo: Etipo,
        //Eadmin: Eadmin,
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (result.value.Etipo == "al") {
        Swal.fire({
          title: "Quieres asignarle un grupo",
          html: `${grupos}`,
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Asignar",
          cancelButtonText: "Continuar sin asignar",
          preConfirm: () => {
            const Egrupo = Swal.getPopup().querySelector("#Egrupo").value;
            return {
              Egrupo: Egrupo,
            };
          },
        }).then((resulta) => {
          if (resulta.isConfirmed) {
            if (resulta.value.Egrupo == "-1") {
              peticion = {
                nombre: `${result.value.Enombre}`,
                apellidos: `${result.value.Eapellidos}`,
                email: `${result.value.Eemail}`,
                username: `${result.value.EnombreUsuario}`,
                password: `${result.value.Epassword}`,
                password_confirmation: `${result.value.Epassword}`,
                id_grupo: null,
              };
            } else {
              peticion = {
                nombre: `${result.value.Enombre}`,
                apellidos: `${result.value.Eapellidos}`,
                email: `${result.value.Eemail}`,
                username: `${result.value.EnombreUsuario}`,
                password: `${result.value.Epassword}`,
                password_confirmation: `${result.value.Epassword}`,
                id_grupo: `${resulta.value.Egrupo}`,
              };
            }
          } else {
            peticion = {
              nombre: `${result.value.Enombre}`,
              apellidos: `${result.value.Eapellidos}`,
              email: `${result.value.Eemail}`,
              username: `${result.value.EnombreUsuario}`,
              password: `${result.value.Epassword}`,
              password_confirmation: `${result.value.Epassword}`,
              id_grupo: null,
            };
          }
          ruta = "register-alumno";
          peticionCrear(peticion, ruta);
        });
      } else {
        if (usuarioLogeado.es_admin) {
          Swal.fire({
            title: "¿Quieres que sea administrador?",
            text: "Cuidado, un usuario administrador tendrá total dominio de la aplicación, contenido y usuarios, solo otorga estos permisos a usuarios que sean de tu confianza",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Administrador",
            cancelButtonText: "Profesor",
          }).then((resulta1) => {
            if (resulta1.isConfirmed) {
              peticion = {
                nombre: `${result.value.Enombre}`,
                apellidos: `${result.value.Eapellidos}`,
                email: `${result.value.Eemail}`,
                username: `${result.value.EnombreUsuario}`,
                password: `${result.value.Epassword}`,
                password_confirmation: `${result.value.Epassword}`,
                es_admin: true,
              };
            } else {
              peticion = {
                nombre: `${result.value.Enombre}`,
                apellidos: `${result.value.Eapellidos}`,
                email: `${result.value.Eemail}`,
                username: `${result.value.EnombreUsuario}`,
                password: `${result.value.Epassword}`,
                password_confirmation: `${result.value.Epassword}`,
                es_admin: false,
              };
            }
            ruta = "register-profesor";
            peticionCrear(peticion, ruta);
          });
        }
      }
    }
  });
};
const peticionCrearAxios = async (peticion, ruta) => {
  swal({
    title: "Se enviará un mail al usuario para que se valide ...",
    icon: carga,
    button: false,
    allowOutsideClick: false,
  });
  await axios
    .post(ruta, peticion)
    .then((response) => {
      //console.log(response.data);
      if (response.status >= 200 && response.status <= 205) {
        //console.log(response.data[1].nombre);
        //console.log(response.data);
        window.location.reload(true);
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
};

const peticionCrear = async (peticion, ruta) => {
  Swal.fire({
    title: "Revisión de datos",
    html: `${peticion.username}, ${peticion.nombre}, ${peticion.apellidos}, ${peticion.email}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Enviar",
    cancelButtonText: "Cancelar",
  }).then((resulta1) => {
    if (resulta1.isConfirmed) {
      peticionCrearAxios(peticion, ruta);
    } else {
      swal({ title: "Cancelado por el usuario" });
    }
  });
};

const onDelete = (id) => {
  swal({
    title: "¿Estás seguro?",
    text: "Una vez eliminado no podrás volver a recuperar el usuario",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      //SI
      //console.log(rol);

      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      axios
        .delete("delete-usuario/" + id)
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
            if (usuarioLogeado.id_profesor) {
              window.location.reload(true);
            } else {
              localStorage.clear();
              window.location.href = "/";
            }
            swal({
              title: "Usuario eliminado",
              text: "  ",
              icon: "success",
              button: false,
              timer: "1800",
            });
          }
        })
        .catch(function (error) {
          //console.log("EEEEEEEEEEEEEEEE", error, "AAAAAAAAAAAAAAAAAAA");
          if (error.status == 401) {
            swal({
              title: "Error acceso " + error.response.status,
              text: "Error, no tienes acceso a esta sección.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          } else {
            //console.log(error.response.data["Error"]);
            if (
              error.response.data["Error"] ==
              "No es posible borrar usuarios administradores"
            ) {
              swal({
                title: "Error " + error.response.status,
                text: "Solo el usuario master puede eliminar cuentas de administradores, pongase en contacto con master para eliminarlo, puede bloquear el usuario cambiando su correo electronico y contraseña mientras se atiende su solicitud",
                icon: "error",
                button: "Aceptar",
                timer: "5000",
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
          }
        });
    } else {
      //swal("Usuario no eliminado");
    }
  });

  //console.log(key, e);
};

const groups = async (rol, id_grupo, grupo) => {
  let grupos = `<input type="hidden" class="swal2-input" id='Egrupo' type='text' value="null">`;
  //console.log(rol, "AAAAAAAAAAAAAAAAAAAAAA");
  var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
  if (usuarioLogeado.id_profesor) {
    if (rol == "Alumno") {
      //console.log(grupos, "BBBBBBBBBBB");
      await axios
        .get("grupos")
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            grupos = `<label for='Egrupo'>Grupo:</label><br>
                        <select class="swal2-input" id="Egrupo">`;
            if (id_grupo) {
              grupos += `<option value="-1">Sin grupo</option>`;
            } else {
              grupos += `<option value="-1" selected>Sin grupo</option>`;
            }
            for (let i = 0; i < response.data.length; i++) {
              if (grupo == response.data[i].nombre) {
                grupos += `<option value="${response.data[i].id}" selected>${response.data[i].nombre}</option>`;
              } else {
                grupos += `<option value="${response.data[i].id}">${response.data[i].nombre}</option>`;
              }
            }
            grupos += `</select>`;
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
    } else if (rol == "Profesor") {
      await axios
        .get("grupos")
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            grupos = `<label for='Egrupo'>Grupo:</label><br>
                        <select class="swal2-input" id="Egrupo">
                          <option value="-1" selected>Sin grupo</option>`;

            for (let i = 0; i < response.data.length; i++) {
              grupos += `<option value="${response.data[i].id}" >${response.data[i].nombre}</option>`;
            }
            grupos += `</select>`;
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
    }
    //console.log("ALUMNO");
    //columns.splice(5);
  }
  return grupos;
  //console.log(grupos, "BBBBBBBBBBB");
};

const onUpdate = async (
  key,
  nombre,
  apellidos,
  email,
  nombreUsuario,
  idUsuario,
  rol,
  id_grupo,
  grupo,
  e
) => {
  //e.preventDefault();
  //const data = this.state.data.filter(item => item.key !== key);
  //this.setState({ data, isPageTween: false });
  //console.log(key, e);
  //history.push("/editUsuario");
  const grupos = await groups(rol, id_grupo, grupo);
  //console.log(grupos, "AAAAAAAAAAAAAAAAAAAAAA");
  Swal.fire({
    title: "Editar",
    html: `<label for='EnombreUsuario'>Usuario:</label>
    <input class="swal2-input" id='EnombreUsuario' type='text' value=${nombreUsuario}>
    <label for='Enombre'>Nombre:</label>
    <input class="swal2-input" id='Enombre' type='text' value=${nombre}>
    <label for='Eapellidos'>Apellidos:</label>
    <input class="swal2-input" id='Eapellidos' type='text' value=${apellidos}>
    <label for='Eemail'>Email:</label>
    <input class="swal2-input" id='Eemail' type='email' value=${email}>
    ${grupos}
    `,
    // <input id='Eprofe' type='checkbox'>
    // <label class="swal2-input" for='Eprofe'>&nbsp;Es profesor</label><br>
    // <input id='Eadmin' type='checkbox'>
    // <label class="swal2-input" for='Eadmin'>&nbsp;Es admin</label>
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Editar",
    cancelButtonText: "Cancelar",
    focusConfirm: false,
    preConfirm: () => {
      const Enombre = Swal.getPopup().querySelector("#Enombre").value;
      const Eapellidos = Swal.getPopup().querySelector("#Eapellidos").value;
      const Eemail = Swal.getPopup().querySelector("#Eemail").value;
      const EnombreUsuario =
        Swal.getPopup().querySelector("#EnombreUsuario").value;
      const Egrupo = Swal.getPopup().querySelector("#Egrupo").value;
      //alert(Egrupo);
      //const Eprofe = Swal.getPopup().querySelector("#Eprofe").checked;
      //const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
      if (!Enombre || !Eapellidos || !Eemail || !EnombreUsuario) {
        Swal.showValidationMessage(`Algún campo obligatorio vacío`);
      }
      return {
        Enombre: Enombre,
        Eapellidos: Eapellidos,
        Eemail: Eemail,
        EnombreUsuario: EnombreUsuario,
        Egrupo: Egrupo,
        //Eadmin: Eadmin,
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      let peticion = [];
      if (result.value.Egrupo == "-1") {
        peticion = {
          nombre: `${result.value.Enombre}`,
          apellidos: `${result.value.Eapellidos}`,
          email: `${result.value.Eemail}`,
          username: `${result.value.EnombreUsuario}`,
          id_grupo: null,
        };
      } else if (result.value.Egrupo != "null") {
        peticion = {
          nombre: `${result.value.Enombre}`,
          apellidos: `${result.value.Eapellidos}`,
          email: `${result.value.Eemail}`,
          username: `${result.value.EnombreUsuario}`,
          id_grupo: `${result.value.Egrupo}`,
        };
      } else {
        peticion = {
          nombre: `${result.value.Enombre}`,
          apellidos: `${result.value.Eapellidos}`,
          email: `${result.value.Eemail}`,
          username: `${result.value.EnombreUsuario}`,
        };
      }
      axios
        .put("update-usuario/" + `${idUsuario}`, peticion)
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data);
            window.location.reload(true);
            //Users.array1[key].nombreUsuario = response.data.nombreUsuario;
            //Users.array1[key].nombre = response.data.nombre;
            //Users.array1[key].apellidos = response.data.apellidos;

            // swal({
            //   icon: "success",
            //   title: "Actualizado",
            //   text: `
            //     Usuario: ${result.value.EnombreUsuario}
            //     Nombre: ${result.value.Enombre}
            //     Apellidos: ${result.value.Eapellidos}
            //     Email: ${result.value.Eemail}
            //   `,
            // });
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
    }
  });
};

const showHeader = true;

const pagination = { position: "bottom" };

const Users = () => {
  const { token } = useContext(User);
  const [datos1, setDatos1] = useState();

  const array = [];
  const array1 = [];

  useEffect(async () => {
    //console.log(token, axios, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa");
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      // console.log(user);
      //if (user.id_profesor) {
      var usuarioLogeado = JSON.parse(localStorage.getItem("user"));
      //console.log(usuarioLogeado);

      //LARAVEL CONTROLA SI EL USUARIO QUE PIDE ES ADMIN O NO
      await axios
        .get("usuarios")
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data, response.data.length);
            for (let i = 0; i < response.data.length; i++) {
              //console.log(response.data[i]);
              array1.push({
                key: i,
                nombreUsuario: response.data[i].nombreUsuario,
                nombre: response.data[i].nombre,
                apellidos: response.data[i].apellidos,
                email: response.data[i].email,
                id_grupo: response.data[i].id_grupo,
                grupo: response.data[i].nombre_grupo,
                rol: response.data[i].tipo,
                id: response.data[i].id,
                idUsuario: response.data[i].idUsuario,
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
    size: "Middle",
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

  return (
    <>
      {/* {onCreateBut()}
      <div style={{ height: 100 }}>
        <Table
          {...state}
          pagination={{ position: [state.top, state.bottom] }}
          columns={tableColumns}
          dataSource={datos1 ? datos1 : null}
          scroll={scroll}
        />
      </div> */}
      <TableWrapper>
        {/* <CreateButton>+ Crear usuario</CreateButton>  */}
        {onCreateBut()}
        <Table
          {...state}
          pagination={{ position: [state.top, state.bottom] }}
          columns={tableColumns}
          dataSource={datos1 ? datos1 : null}
          scroll={scroll}
          className="users-table"
        />
      </TableWrapper>
    </>
  );
};

export default Users;
