import React from "react";

import { Container, CustomButton } from "./styles";

function Button({ type, variant = "outlined", label, width = "100%" }) {
  return (
    <Container width={width}>
      <CustomButton type={type} variant={variant} fullWidth>
        {label}
      </CustomButton>
    </Container>
  );
}

export default Button;
