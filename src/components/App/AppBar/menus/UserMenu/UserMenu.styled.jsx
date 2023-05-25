import styled from "@emotion/styled";

export const UserContainerCss = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const UserTitle = styled.h2`
  color: #fff;
`;

export const UserWrapCss = styled.div`
  display: flex;
  align-Items: center;
  justify-Content: center;
  gap: 10px;

  @media screen and (max-width: 480px) {
    display: none;
  };
`;

