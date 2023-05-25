import styled from "@emotion/styled";
import { ButtonCss } from "components/App/App.styled";

export const BackdropCss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

`;

export const ModalCss = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

export const ModalOpenCss = styled(ButtonCss)`
  @media screen and (min-width: 480px) {
    display: none;
  };
  @media screen and (max-width: 479px) {
    max-width: 100px;
    padding: 8px;
  };
`;

export const ModalCloseCss = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
`
