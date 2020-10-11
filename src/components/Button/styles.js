import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  display: table-footer-group;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 8px 0;

  button {
    color: white;
    border-color: #35b729;
    background-color: #35b729;
  }

  button:hover {
    border: 1px solid #35b729 !important;
    color: #35b729;
  }
`;

export const CustomButton = styled(Button)`
  height: 45px;
`;
