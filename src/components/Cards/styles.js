import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 4px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  h2 {
    color: #6f6f6f;
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    margin: 10px 0;
  }

  span {
    color: #6f6f6f;
    font-family: "Roboto", sans-serif;
  }
`;
