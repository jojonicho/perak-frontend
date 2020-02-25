import styled from "styled-components";

export const OpenTenantFormContainer = styled.div`
  .check-box-container {
    display: flex;
  }

  .check-box input[type="radio"] {
    width: 20px;
    height: 15px;
    min-width: 10px;
    box-shadow: none;
    margin: 0;
  }

  .check-box-container {
    margin-top: 10px;
    padding-left: 10px;
  }

  .bazar-agree {
    width: 30px;
    height: 18px;
    min-width: 10px;
    box-shadow: none;
    margin: 0 !important;
  }

  .hide {
    display: none;

    .check-box label {
      cursor: pointer !important;
    }
  }
  .flex-label {
    display: flex;
  }

  .p-marg {
    margin-top: 8px;
    margin-right: 10px;
  }

  #input-other {
    margin-top: 2px !important;
    width: 70%;
  }
`;
