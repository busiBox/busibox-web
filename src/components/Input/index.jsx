import React from "react";

import { Input as CustomInput, InputContainer } from "./styles.js";

function Input({
  placeholder,
  type = "text",
  variant = "outlined",
  size = "small",
  label = "",
  width = "100%",
  onChange,
}) {
  return (
    <InputContainer width={width}>
      <label>{label}</label>
      <CustomInput
        variant={variant}
        type={type}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
        fullWidth
      />
    </InputContainer>
  );
}

export default Input;
