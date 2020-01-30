import styled from "styled-components";

export const KlasemenPageContainer = styled.div`
  min-height: 100vh;
  padding: 10px;
  padding-bottom: 150px;
  font-family: montserrat;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #e5e5e5;

  .title {
    font-size: 62px;
    /* font-size: 2.5em; */
    font-family: BigJohnPRO;
    color: #444fcb;
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 840px) {
    .title {
      font-size: 33px;
      margin-bottom: 50px;
    }
  }
`;
