import React, { useState } from "react";

import { Table, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

import { TableWrapper } from "./Practice.styled";

const columns = [
  {
    title: "Picos",
    dataIndex: "picos",
    sorter: (a, b) => a.picos - b.picos,
  },
  {
    title: "Substancias",
    dataIndex: "substancias",
    sorter: (a, b) => a.substancias - b.substancias,
  },
  {
    title: "Minutos",
    dataIndex: "minutos",
    sorter: (a, b) => a.minutos - b.minutos,
  },
  {
    title: "Altura",
    dataIndex: "altura",
    sorter: (a, b) => a.altura - b.altura,
  },
];

const data = [];
for (let i = 1; i <= 6; i++) {
  data.push({
    key: i,
    picos: i,
    substancias: "Naphtalene",
    minutos: 3.3,
    altura: 125,
  });
}

const showHeader = true;

const pagination = { position: "bottom" };

const CompoundTable = () => {
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
    <TableWrapper className="col-6">
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        columns={tableColumns}
        dataSource={state.hasData ? data : null}
        scroll={scroll}
        className="compound-table"
      />
    </TableWrapper>
  );
};

export default CompoundTable;
