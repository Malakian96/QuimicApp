
import React, {
  useEffect,
  useState,
  createContext,
  Suspense,
  lazy,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";
import axios from "./components/common/http";
import carga from "./assets/img/load/ajax-loader.gif";

import GlobalFonts from "./assets/fonts/fonts";
import Login from "./containers/login/Login";
import Home from "./containers/home/home";
import UsersLanding from "./containers/users/usersLanding/UsersLanding";
import GroupsLanding from "./containers/groups/groupsLanding/GroupsLanding";
import PracticesLanding from "./containers/practices/practicesLanding/PracticesLanding";
import PracticePage from "./containers/practices/view/PracticePage";
import CompoundsLanding from "./containers/compounds/compoundsLanding/CompoundsLanding";
import ComponentsLanding from "./containers/components/componentsLanding/ComponentsLanding";


// const UsersLanding = lazy(() =>
//   import("./containers/users/usersLanding/UsersLanding")
// );
// const Grupos = lazy(() => import("./containers/grupos/grupos"));


export const User = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loggedToken = localStorage.getItem("token");

    axios.defaults.headers.common.Authorization = `Bearer ${loggedToken}`;

  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      <GlobalFonts />
      <User.Provider value={{ user, setUser, token, setToken }}>
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img src={carga} class="centerLoadingLogo" alt="loading" />
              <h1 style={{ textAlign: "center" }}>Cargando...</h1>
            </div>
          }
        >
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/usuarios" exact>
                <UsersLanding />
              </Route>
              <Route path="/grupos">
                <GroupsLanding />
              </Route>
              <Route path="/practicas" exact>
                <PracticesLanding />
              </Route>
              <Route path="/practicas/practica" exact>
                <PracticePage />
              </Route>
              <Route path="/compuestos" exact>
                <CompoundsLanding />
              </Route>
              <Route path="/componentes" exact>
                <ComponentsLanding />
              </Route>

              {/* <Route>
                <PageNotFound />
              </Route> */}
            </Switch>
          </Router>
        </Suspense>
      </User.Provider>
    </>
  );
};

export default App;
