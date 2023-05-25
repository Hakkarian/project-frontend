import styled from "@emotion/styled";
import { ButtonCss } from "components/App/App.styled";

export const ContactTextCss = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
`;

export const DeleteButtonCss = styled(ButtonCss)`
  &:hover, &:focus {
    background-color: red;
  }
`