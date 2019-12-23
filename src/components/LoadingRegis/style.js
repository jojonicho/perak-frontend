import styled from "styled-components";

export const LoadingRegisContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(63, 63, 63, 0.448);
    display: flex;
    justify-content: center;
    align-items: center;
    .loadingdiv{
        width: 85%;
        max-width: 350px;
        height: 150px;
        background-color: #fff
        border: solid black 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .loadingbarcont{
            border: solid black 3px;
            height: 30px;
            width: 90%;
            .loadingbar{
                height: 30px;
                background: linear-gradient(0.25turn, green ,green, rgb(0, 185, 0), green, green );
                background-size: 1000px;
                animation: loading 1s linear infinite;
            }
            @keyframes loading{
                0%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @-webkit-keyframes loading {
                0%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @-moz-keyframes loading {
                0%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
        }
    }
`;
