import styled from "styled-components";

export const TableWrapper = styled.div`
  & .groups-table {
    & table {
      border-collapse: separate;
      border-spacing: 0 0.3rem;
    }
    & .ant-table-selection,
    .ant-checkbox-wrapper {
      display: none;
    }
    & tr {
      height: 5rem;
      font-size: 17px;
      &:hover > td {
        background-color: #6bb1c5;
      }
      & td:last-of-type {
        text-align: center;
      }
    }
    & thead tr th {
      background-color: #0a1128;
      color: #fefcfb;
    }
    & tr td {
      background-color: #0a1128;
      color: #fefcfb;
    }
    & tr td:first-child,
    tr th:first-child {
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
    }
    & tr td:last-child,
    tr th:last-child {
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
    }
    & .ant-table-column-has-sorters:hover {
      background-color: #6bb1c5;
    }
    & td div div {
      &:first-child {
        a path {
          fill: #3d6e9c;
        }
      }
      &:last-child {
        a path {
          fill: #c56b6b;
        }
      }
      & a {
        padding: 0rem 0rem;
        border: none;
        border-radius: 0.2rem;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }
`;

export const CreateButton = styled.a`
  display: block;
  width: 160px;
  height: 45px;
  background: #6bb1c5;
  padding: 10px;
  margin-bottom: 2rem;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #6bb1c5;
  text-decoration: none;
  box-shadow: 0rem 0.2rem 0.2rem 0rem #bdbdbd;
  float: right;
  &:hover {
    color: white;
  }
`;
