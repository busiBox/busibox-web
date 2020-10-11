import React from "react";

import { Container } from "./styles";

function Cards({ title, data, width, height, icon }) {
  return (
    <Container width={width} height={height}>
      <img src={icon} alt="Resource" />
      <h2>{data}</h2>
      <span>{title}</span>
    </Container>
  );
}

export default Cards;
