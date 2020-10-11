import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};

  label {
    color: #172b4d !important;
    font-size: 12px;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    margin: 8px 0 5px 0;
  }
`;

export const SelectField = styled.select`
  background-color: white;
  height: 45px;
  width: 100%;
  border: 1px solid #cad2dd;
  border-radius: 4px;
  padding: 10px;
`;
