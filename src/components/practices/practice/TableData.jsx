import React, { useState } from "react";

import { Descriptions } from "antd";

const Practices = () => {
  return (
    <Descriptions
      title="Datos importantes de la práctica"
      layout="horizontal"
      column={1}
      bordered={true}
      className="col-6"
    >
      <Descriptions.Item label="Longitud columna">150 mm</Descriptions.Item>
      <Descriptions.Item label="Diámetro interior columna">
        4,6 mm
      </Descriptions.Item>
      <Descriptions.Item label="Tamaño de partícula">5 um</Descriptions.Item>
      <Descriptions.Item label="Temperatura"> 35º</Descriptions.Item>
      <Descriptions.Item label="Velocidad de flujo">
        1.5 ml/min
      </Descriptions.Item>
      <Descriptions.Item label="Diluyente">ACN 50% + H2O 50%</Descriptions.Item>
      <Descriptions.Item label="Detector UV">254 nm</Descriptions.Item>
    </Descriptions>
  );
};

export default Practices;
