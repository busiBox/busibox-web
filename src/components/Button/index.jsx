import React from "react";

import { Container, CustomButton } from "./styles";

function Button({
  type,
  variant = "outlined",
  label,
  width = "100%",
  onClick = () => {},
}) {
  return (
    <Container width={width}>
      <CustomButton type={type} variant={variant} fullWidth onClick={onClick}>
        {label}
      </CustomButton>
    </Container>
  );
}

export default Button;
