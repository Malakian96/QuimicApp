import React, { useContext } from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import styled from "styled-components";
import { User } from "../../App";
import SideNavBar from "../../components/common/sideNav/SideNav";

import "./assets/css/main.css";

const Heading = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const HomePage = () => {
  const { user } = useContext(User);

  const msg = user ? (
    <>
      <link rel="stylesheet" href="./assets/css/main.css" />
      <noscript>
        <link rel="stylesheet" href="./assets/css/noscript.css" />
      </noscript>
      {/* <Heading>No estás logueado</Heading> */}
      <section id="header" class="dark">
        <header>
          <h1>Bienvenido {user.username}</h1>
          <p>Ya puedes acceder a las funcionalidades que ofrece la web.</p>
        </header>
        <footer>
          <a href="/usuarios" class="button scrolly">
            Acceso a usuario
          </a>
          <br></br>
          <br></br>
          <a href="/grupos" class="button scrolly">
            Acceso a grupos
          </a>
          <br></br>
          <br></br>
          <a href="/practicas" class="button scrolly">
            Acceso a practicas
          </a>
        </footer>
      </section>
    </>
  ) : (
    <>
      <link rel="stylesheet" href="./assets/css/main.css" />
      <noscript>
        <link rel="stylesheet" href="./assets/css/noscript.css" />
      </noscript>
      {/* <Heading>No estás logueado</Heading> */}
      <section id="header" class="dark">
        <header>
          <h1>Bienvenido a QuimicApp</h1>
          <p>
            Un recurso en línea gratuito para la simulación, educación y más
            sobre la cromatografía líquida de alto rendimiento (HPLC).
          </p>
        </header>
        <footer>
          <a href="#first" class="button scrolly">
            Avanza para saber más
          </a>
        </footer>
      </section>

      <section id="first" class="main">
        <header>
          <div class="container">
            <h2>
              Ponga a prueba a sus alumnos con ejercicios o demostraciones
            </h2>
            <p>
              QuimicApp es una herramienta de simulación de cromatografía
              líquida de alto rendimiento basada en la web. Ajuste una variedad
              de parámetros experimentales y vea su efecto en los parámetros
              cromatográficos, incluido el tiempo de retención, la eficiencia de
              la columna y la contrapresión. Está destinado a ser utilizado
              únicamente con fines educativos.
            </p>
          </div>
        </header>
        <div class="content dark style1 featured">
          <div class="container">
            <div class="row">
              <div class="col-4 col-12-narrow">
                <section>
                  <span class="feature-icon">
                    <span class="icon fa-clock"></span>
                  </span>
                  <header>
                    <h3>Fácil de usar y rápido</h3>
                  </header>
                  <p>
                    Simplemente ejecute una mezcla de prueba que sobre los
                    estándares e informa de los tiempos de retención a la
                    aplicación la cual calculará el gradiente. Incluso puede
                    hacer que el software extraiga automáticamente los tiempos
                    de retención de su archivo de datos.
                  </p>
                </section>
              </div>
              <div class="col-4 col-12-narrow">
                <section>
                  <span class="feature-icon">
                    <span class="icon solid fa-bolt"></span>
                  </span>
                  <header>
                    <h3>Potente y rápida</h3>
                  </header>
                  <p>
                    La aplicación está pensada para ofrecer resultados de una
                    forma rápida y precisa, ahorrando los largos tiempos que
                    necesitaría un cromatografo, ofreciendo los resultados de
                    forma instantánea y permitiendo multiples usuarios
                    trabajando de forma simultánea.
                  </p>
                </section>
              </div>
              <div class="col-4 col-12-narrow">
                <section>
                  <span class="feature-icon">
                    <span class="icon solid fa-cloud"></span>
                  </span>
                  <header>
                    <h3>Software en la nube</h3>
                  </header>
                  <p>
                    Evita tener que trabajar instalando programas en tus
                    dispositivos gracias a la Nube. Podrás acceder desde
                    cualquier parte y con cualquier herramienta capaz de abrir
                    un navegador web, bastará con disponer de una conexión a
                    internet para haceder a toda la información.
                  </p>
                </section>
              </div>
              <div class="col-12">
                <footer>
                  <a href="#second" class="button scrolly">
                    Gestión de usuarios y grupos
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="second" class="main">
        <header>
          <div class="container">
            <h2>Usuarios y permisos</h2>
            <p>
              Se pueden declarar diferentes usuarios y asignar un nivel de
              acceso diferente, o unos privilegios, para cada uno de ellos.
              Antes de trabajar en el sistema es necesario iniciar una sesión,
              momento en el que la persona que quiere acceder al sistema se
              identifica como uno de los usuarios del sistema. Aunque de forma
              intuitiva se puede pensar que cada usuario del sistema es una
              persona diferente, esto no tiene porqué ser siempre así. Un
              usuario del sistema.
            </p>
          </div>
        </header>
        <div class="content dark style2">
          <div class="container">
            <div class="row">
              <div class="col-10 col-12-narrow">
                <section>
                  <h2>Gran equipo de desarrollo</h2>
                  <p>
                    Somos tres programadores que disfrutamos encontrando
                    soluciones eficaces para cada proyecto específico. La
                    pasión, la entrega y la dedicación que aplicamos cada día se
                    traduce en resultados concretos.
                  </p>
                  <p>
                    En nuestro equipo contamos con buenos desarrolladores de
                    software, nos encanta desarrollador apps y software a
                    medida, sistemas, tecnologías móviles, sistemas en la nube y
                    mucho más. Nuestra visión del trabajo, colaboración y
                    prestación de servicios garantiza los mejores niveles de
                    calidad y satisfacción.
                  </p>
                  <p>
                    Nos encontramos ubicados en Barcelona pero somos capaces e
                    trabajar de la misma forma a distancia. Estaremos encantados
                    de escuchar las necesidades de tu empresa y, sobre todo, de
                    satisfacerlas con las soluciones más adecuadas y eficaces.
                  </p>
                  <footer>
                    <a href="#nosotros" class="button scrolly">
                      ¿Quieres saber más sobre nosotros?
                    </a>
                  </footer>
                </section>
              </div>
              {/* <div class="col-8 col-12-narrow">
                <div class="row">
                  <div class="col-6">
                    <a href="#" class="image fit">
                      <img src="./images/pic01.jpg" alt="" />
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="#" class="image fit">
                      <img src="./images/pic02.jpg" alt="" />
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="#" class="image fit">
                      <img src="./images/pic03.jpg" alt="" />
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="#" class="image fit">
                      <img src="./images/pic04.jpg" alt="" />
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="#" class="image fit">
                      <img src="./images/pic05.jpg" alt="" />
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="#" class="image fit">
                      <img src="./images/pic06.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="third" class="main">
        <header>
          <div class="container">
            <h2>Seguridad y accesos</h2>
            <p>
              Nuestra plataforma utiliza los estándares de seguridad por lo que
              no debes temer por tus datos ya que estarán a buen recaudo aunque
              si olvidas tus credenciales de acceso no temas, podrás recuperar
              tu cuenta contactando con algún administrador o mediante el
              apartado de recuperación.
            </p>
          </div>
        </header>
        <div class="content dark style3">
          <div class="container">
            <span class="image featured">
              <img src="images/pic07.jpg" alt="" />
            </span>
            <div id="nosotros" class="row">
              <div class="col-4 col-12-narrow">
                <h2>Jordi Martínez</h2>
                <p>FOTO</p>
                <p>
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia eget ornare varius gravida.
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia accumsan vivamus augue
                  cubilia vivamus nisi eu eget ornare varius gravida euismod.
                  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.
                </p>
                <ul class="icons">
                  <li>
                    <a href="#" class="icon brands fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-facebook-f">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-instagram">
                      <span class="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-dribbble">
                      <span class="label">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-github">
                      <span class="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-4 col-12-narrow">
                <h2>Toni Soria</h2>
                <p>FOTO</p>
                <p>
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia eget ornare varius gravida.
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia accumsan vivamus augue
                  cubilia vivamus nisi eu eget ornare varius gravida euismod.
                  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.
                </p>
                <ul class="icons">
                  <li>
                    <a href="#" class="icon brands fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-facebook-f">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-instagram">
                      <span class="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-dribbble">
                      <span class="label">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-github">
                      <span class="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-4 col-12-narrow">
                <h2>Sherab Pereira</h2>
                <p>FOTO</p>
                <p>
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia eget ornare varius gravida.
                  Gravida dis placerat lectus ante vel nunc euismod est turpis
                  sodales. Diam tempor dui lacinia accumsan vivamus augue
                  cubilia vivamus nisi eu eget ornare varius gravida euismod.
                  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.
                </p>
                <ul class="icons">
                  <li>
                    <a href="#" class="icon brands fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-facebook-f">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-instagram">
                      <span class="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-dribbble">
                      <span class="label">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-github">
                      <span class="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fourth" class="main">
        <header>
          <div class="container">
            <h2>¿Te han quedado dudas?</h2>
            <p>
              En ese caso no dudes en ponerte en contacto con nosotros y
              preguntarnos, estaremos encantados de atender tus peticiones.
            </p>
          </div>
        </header>
      </section>

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
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
