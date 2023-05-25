import styled from "@emotion/styled";


export const ContactUlCss = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 30px;

    margin-bottom: 30px;
    flex-wrap: wrap;
`

export const ContactItemCss = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  min-width: calc(50% - 2 * 20px);
  height: 60px;
  padding: 10px;

  background-image: linear-gradient(#fff300, #4fffb0);
  color: #000;

  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #000;

  transition: background-color 250ms ease-in-out, color 250ms linear,
    box-shadow 250ms linear, outline 250ms linear;

  &:hover,
  &:focus {
    background-image: none;
    background-color: #000;
    color: #fff;
    outline: 1px dashed #fff;
    box-shadow: 0px 0px 0px 0px #000;
  }
`;