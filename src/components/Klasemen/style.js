import styled from "styled-components";

export const KlasemenContainer = styled.div`
  padding: 0px 5px;
  .group {
    border-radius: 3px;
    margin: 25px 0px;
    padding: 10px;
    background-color: #33b3a6;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .namaTeam {
    background-color: #ff90b5;
    border-radius: 15px;
  }
  table {
    font-size: 1.8rem;
    font-weight: 550;
    border-spacing: 0 5px;

    div {
      padding: 10px;
    }

    td:first-child {
      border-top-left-radius: 5px;
    }
    td:last-child {
      border-top-right-radius: 5px;
      border-left: 3px solid #33b3a6;
    }
    td:first-child {
      border-bottom-left-radius: 5px;
    }
    td:last-child {
      border-bottom-right-radius: 5px;
    }

    tr {
      background: #fff;
    }

    th {
      background: #33b3a6;
      padding: 10px;
    }

    td {
      padding: 10px;
    }
    .stats {
      background-color: #e7632a;
      color: #f0f0f0;
      border-radius: 50%;
    }
    .point {
      background-color: #444fcb;
      color: #f0f0f0;
      border-radius: 50%;
    }
    tr:hover {
      background-color: #ececff;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 667px) {
    table {
      border-spacing: 0 5px;
      div {
        padding: 5px;
      }
      th {
        padding: 4px 1px;
      }
      td {
        padding: 4px 1px;
      }
    }
    table {
      font-size: 0.5rem;
    }
  }
`;
