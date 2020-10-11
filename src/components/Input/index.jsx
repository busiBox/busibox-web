import React from "react";

import { Input as CustomInput, InputContainer } from "./styles.js";

function Input({
  type = "text",
  width = "100%",
  label,
  placeholder = "",
  onChange,
  step = "",
}) {
  return (
    <InputContainer width={width}>
      <label>{label}</label>
      <CustomInput
        step={step}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        fullWidth
      />
    </InputContainer>
  );
}

export default Input;
