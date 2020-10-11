import React from "react";

import { Container, SelectField } from "./styles.js";

function Select({ label, width = "100%", onChange, children }) {
  return (
    <Container width={width}>
      <label>{label}</label>
      <SelectField onChange={onChange}>{children}</SelectField>
    </Container>
  );
}

export default Select;
