import styled from "styled-components";

export const KlasemenContainer = styled.div`
  padding: 0px 9vw;
  .group {
    border-radius: 3px;
    margin: 25px 0px;
    padding: 30px;
    background-color: #33b3a6;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .decor {
    position: absolute;
    width: 8vw;
    z-index: 2;
  }
  .orange-ellipse-2 {
    left: -4vw;
    top: 40%;
  }
  .purple-yellow-ball {
    right: 5vw;
    bottom: -4vw;
  }
  .purple-ball {
    right: -3vw;
    bottom: -3vw;
  }
  .orange-green-ball-rect {
    top: -3vw;
  }
  .purple-rect {
    left: -3vw;
    bottom: -2vw;
  }
  .orange-ellipse {
    top: -4vw;
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
    padding: 0px 0.8vw;
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
    .group {
      padding: 8px;
    }
    table {
      font-size: 0.5rem;
    }
  }
`;
