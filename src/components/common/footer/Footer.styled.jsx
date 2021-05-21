import styled from "styled-components";

export const SFooter = styled.footer`
  height: 10%;
  background-color: #034078;
  box-shadow: inset 0 1px 1px #034078, 0 0 8px #1283a29f;

  .social-icon {
    transition: 0.15s ease-in-out;
    color: #fefcfb;
    font-size: 28px;
    transform: scale3d(1, 1, 1);

    :hover {
      transform: scale3d(1.2, 1.2, 1.2);
    }
  }
`;
