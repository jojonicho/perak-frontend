import styled from "styled-components";

const dark = "#0D2040";

export const LoadingScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${dark};
  flex-direction: column;
  padding-top: 150px;
  .logo-loading {
    width: 150px;
    margin-bottom: 20px;
  }
  .loading-bar svg {
  }
`;
