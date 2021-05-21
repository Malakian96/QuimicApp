import React, { useState } from "react";

import { Table, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

import { CreateButton, TableWrapper } from "./Compounds.styled";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
    sorter: (a, b) => a.nombre - b.nombre,
  },
  {
    title: "",
    key: "accion",
    render: () => (
      <Space size="middle">
        <a href="http://localhost:3000/componentes" title="Ver">
          <FontAwesomeIcon icon={faEye} className="view-icon" />
        </a>
        <a href="http://localhost:3000/componentes" title="Editar">
          <FontAwesomeIcon icon={faEdit} className="view-icon" />
        </a>
        <a href="http://localhost:3000/componentes" title="Eliminar">
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
    nombre: "Cloruro de sodio",
  });
}

const showHeader = true;

const pagination = { position: "bottom" };

const Compounds = () => {
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
      <CreateButton>+ Crear compuesto</CreateButton>
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={state.hasData ? data : null}
        scroll={scroll}
        className="compounds-table"
      />
    </TableWrapper>
  );
};

export default Compounds;
