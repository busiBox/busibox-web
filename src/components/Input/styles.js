import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};

  label {
    color: #172b4d !important;
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  background-color: white;
  height: 45px;
  width: 100%;
  border: 1px solid #cad2dd;
  border-radius: 4px;
  padding: 10px;
`;
