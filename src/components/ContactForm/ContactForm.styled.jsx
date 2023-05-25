import styled from "@emotion/styled";
import { ButtonCss, TitleCss } from "components/App/App.styled";

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

  background-image: linear-gradient(#fff300, #4fffb0);
  color: #000;

  border-radius: 5px;

  transition: box-shadow 250ms linear, border 250ms linear,
    background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: #fff;
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

export const BlackTitle = styled(TitleCss)`
  color: #000;
`