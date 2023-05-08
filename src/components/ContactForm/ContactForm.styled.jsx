import styled from "@emotion/styled";
import { ButtonCss } from "components/App/App.styled";

export const ContactFormCss = styled.form`
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  padding: 20px;

  margin-top: 100px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  background-image: linear-gradient(#fff300, #007c44);
  color: #000;

  border-radius: 5px;
  border: 5px dashed black;

  transition: box-shadow 250ms linear, border 250ms linear,
    background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: #fff;
    border: 10px dashed black;
  }
`;

export const ContactLabelCss = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    max-width: 300px;
`

export const CreateButtonCss = styled(ButtonCss)`
  &:hover,
  &:focus {
    background-color: green;
  }
`;