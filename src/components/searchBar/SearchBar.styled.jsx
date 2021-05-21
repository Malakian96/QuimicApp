import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: relative;
  margin: 3rem 0rem;

  & input {
    width: 100%;
    height: 3.2rem;
    border-radius: 1.5rem;
    filter: drop-shadow(0rem 0.19rem 0.2rem #757575);
    border: none;
    padding-left: 4rem;

    &:focus {
      outline: none;
    }
  }
  & .search-icon {
    font-size: 20px;
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    & path {
      fill: #0a1128;
    }
  }
`;
