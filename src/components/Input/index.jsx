import React from "react";

import { Input as CustomInput, InputContainer } from "./styles";

function Input({
  placeholder,
  type = "text",
  variant = "outlined",
  size = "small",
  label = "",
  onChange,
}) {
  return (
    <InputContainer>
      <label>{label}</label>
      <CustomInput
        variant={variant}
        type={type}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
