import styled from "styled-components";

const Button = styled.button`
  height: 2rem;
  outline: none;
  background-color: #2b62ad;
  color: #fff;
  border: 2px solid #2b62ad;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &: hover {
    background-color: #424446;
  }
`;

export default Button;
