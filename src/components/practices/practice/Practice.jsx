import React, { useState } from "react";
import { Scatter } from "react-chartjs-2";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

import TableCompound from "./TableCompound";
import TableData from "./TableData";

//Modelo de objeto JSON 'columnas' obtenido de API
const columnas = [
  { inicio: { x: 20, y: 0 }, peak: { x: 21, y: 130 }, fin: { x: 22, y: 0 } },
  { inicio: { x: 29, y: 0 }, peak: { x: 31, y: 215 }, fin: { x: 33, y: 0 } },
  { inicio: { x: 80, y: 0 }, peak: { x: 85, y: 110 }, fin: { x: 90, y: 0 } },
];

//tiempo medido en segundos
const tiempoProcesamientoColumna = 150;
const inicioChart = { x: 0, y: 0 };
const finChart = { x: tiempoProcesamientoColumna * 1000, y: 0 };

//conversion de segundos a milisegundos y push a array data
let data = [];

columnas.forEach(function (columna) {
  data.push(inicioChart);
  columna.inicio.x *= 1000;
  data.push(columna.inicio);
  columna.peak.x *= 1000;
  data.push(columna.peak);
  columna.fin.x *= 1000;
  data.push(columna.fin);
  data.push(finChart);
});

const aPdf = () => {
  let grafico = window.document.getElementById("aPdf");

  html2canvas(grafico).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const pdf = new jspdf("l", "px", "a4");
    pdf.addImage(
      img,
      "png",
      50, //x
      25, // y
      grafico.clientWidth / 2, // width
      grafico.clientHeight / 2, // height
      "",
      "NONE"
    );
    pdf.save("practica.pdf");
  });
};

const Practice = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <h1 className="p-5 text-center">Prueba práctica</h1>

      <div class="row">
        <div class="col col-md-6">
          <div>
            <Scatter
              id="aPdf"
              height={400}
              width={600}
              data={{
                datasets: [
                  {
                    data,
                    borderColor: "black",
                    borderWidth: 1,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    tension: 0.02,
                    showLine: true,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                tooltips: {
                  enabled: false,
                },
                plugins: {
                  legend: false,
                },
                title: {
                  display: true,
                  text: "HPLC",
                },
                scales: {
                  xAxes: [
                    {
                      type: "time",
                      time: {
                        displayFormats: {
                          second: "mm:ss",
                        },
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Tiempo",
                      },
                      gridLines: {
                        color: "#888",
                        drawOnChartArea: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        color: "#888",
                        drawOnChartArea: false,
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Altura",
                      },
                    },
                  ],
                },
              }}
            />
          </div>
          <div>
            <button onClick={() => aPdf()}>Generar PDF</button>
          </div>
        </div>
        <div className="col-md-6 commentsWrapper">
          <div className="row">
            <label htmlFor="respuestaAlumno">Respuesta Alumno</label>
            <textarea
              name="respuestaAlumno"
              id="respuestaAlumno"
              cols="30"
              rows="8"
              readonly
            ></textarea>
            <label htmlFor="comentarioProfesor">Comentario Profesor</label>
            <textarea
              name="comentarioProfesor"
              id="comentarioProfesor"
              cols="30"
              rows="8"
              readonly
            ></textarea>
          </div>
        </div>
      </div>

      <div class="row">
        <TableCompound />
        <TableData />
      </div>
    </>
  );
};

export default Practice;
