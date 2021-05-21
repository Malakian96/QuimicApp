import React, { useState } from "react";

import { Table, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

import { CreateButton, TableWrapper } from "./Practices.styled";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Nº muestra",
    dataIndex: "muestra",
    sorter: (a, b) => a.profesor - b.profesor,
  },
  {
    title: "Profesor",
    dataIndex: "profesor",
    sorter: (a, b) => a.profesor - b.profesor,
  },
  {
    title: "Grupo",
    dataIndex: "grupo",
    sorter: (a, b) => a.grupo - b.grupo,
  },
  {
    title: "Fecha inicio",
    dataIndex: "fechaInicio",
    sorter: (a, b) => a.fechaInicio - b.fechaInicio,
  },
  {
    title: "Fecha fin",
    dataIndex: "fechaFin",
    sorter: (a, b) => a.fechaFin - b.fechaFin,
  },
  {
    title: "",
    key: "accion",
    render: () => (
      <Space size="middle">
        <a href="http://localhost:3000/practicas/practica" title="Ver">
          <FontAwesomeIcon icon={faEye} className="view-icon" />
        </a>
        <a href="http://localhost:3000/practicas/practica" title="Editar">
          <FontAwesomeIcon icon={faEdit} className="view-icon" />
        </a>
        <a href="http://localhost:3000/practicas/practica" title="Eliminar">
          <FontAwesomeIcon icon={faTimes} className="delete-icon" />
        </a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    id: i,
    muestra: i + 1245 - i * 10,
    profesor: "John Brown",
    grupo: `DAW`,
    fechaInicio: "01/01/1111",
    fechaFin: `01/01/1111`,
  });
}

const showHeader = true;

const pagination = { position: "bottom" };

const Practices = () => {
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
    <TableWrapper>
      <CreateButton>+ Crear páctica</CreateButton>
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={state.hasData ? data : null}
        scroll={scroll}
        className="practices-table"
      />
    </TableWrapper>
  );
};

export default Practices;
