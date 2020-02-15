import styled from "styled-components";

export const KlasemenContainer = styled.div`
  padding: 0 12vw;
  .group {
    border-radius: 3px;
    margin: 2vw 0px;
    margin-bottom: 30px;
    padding: 2.5vw;
    // background-color: #33b3a6;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  // .purple {
  //   background-color: rgb(68, 79, 203);
  // }
  .grouptitle {
    color: ${props => (props.color === "#444fcb" ? "white" : "black")};
    font-size: 2.5em;
  }
  a,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
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
    padding: 1vw;
    background-color: #ff90b5;
    border-radius: 15px;
  }
  table {
    font-size: 1.5vw;
    font-weight: 550;
    border-spacing: 0 1vw;
    padding-bottom: 30px;

    td:first-child {
      border-top-left-radius: 0.6vw;
    }
    td:last-child {
      border-top-right-radius: 0.6vw;
      border-left: 3px solid ${props => props.color};
    }
    td:first-child {
      border-bottom-left-radius: 0.6vw;
    }
    td:last-child {
      border-bottom-right-radius: 0.6vw;
    }

    tr {
      background: #fff;
    }

    th {
      // padding: 0.1vw;
      padding: 0.15vw 0.6vw;
      height: 4.5vw;
      // min-width: 55px;
      // background: #33b3a6;
      background: ${props => props.color};
    }

    td {
      padding: 0.6vw;
    }
    .stats {
      width: 3.5vw;
      font-size: 1vw;
      height: 3.5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e7632a;
      color: #f0f0f0;
      border-radius: 50%;
    }
    // .green {
    //   background-color: #33b3a6;
    // }
    .point {
      width: 6vw;
      height: 6vw;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props =>
        props.color === "#444fcb" ? "#F2CF35" : "#444fcb"};
      color: #f0f0f0;
      border-radius: 50%;
    }
    /* tr:hover {
      background-color: #ececff;
      cursor: pointer;
    } */
  }
  .tim-futsal-name:hover {
    color: rgb(68, 79, 203);
  }
  @media screen and (max-width: 768px) {
    padding: 0px 3vw;
    .grouptitle {
      font-size: 2em;
    }
    table {
      font-size: 2.5vw;
      div {
        padding: 1.5vw;
      }
      th {
        padding: 0.4vw;
      }
      td {
        padding: 1vw;
      }
      .stats {
        width: 4vw;
        height: 4vw;
        font-size: 1.8vw;
      }
    }
  }
`;
