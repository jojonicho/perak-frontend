import styled from "styled-components";

export const PerakTahunIniContainer = styled.div`
margin-top:-365px;
.bola-bulet{
    display:block;
    margin-left:auto;
    margin-right:auto;
    animation: rolling 3s linear 0s infinite;
}

@keyframes rolling{
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
.right-decor{
    display:block;
    margin-left:auto;
    z-index:-3;
    margin-top:-60px;
}
.main-bg{
    position:absolute;
    z-index:0;
    width:100vw;
}
.main-section{
    margin-top:-400px;
    padding-top:150px;
    height:800px;
}
.main-content{
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center
    width:100%;
    padding-top:150px;
}
.sec-title{
    display:block;
    width:100%;
    text-align:center;
    margin-top:100px;
}
.foto-kiri{
    position:absolute;
    left:0;
    margin-top:300px;
}
.decor-foto-kiri{
    position:absolute;
    left:0;
    margin-top:800px;
}
.foto-kanan{
    position:absolute;
    right:0;
    margin-top:300px;

}
.decor-foto-kanan{
    position:absolute;
    right:0;
    margin-top:300px;
}
.circle-text-section{
    display:flex;
    flex-direction:column;
    align-items:center;
}
.circle-row{
    display:flex;
    flex-direction:row;
    margin-top:30px;
    margin-bottom:30px;
    width:max-content;
}
.circle-item{
    background-color:#EEDD8F;
    border-radius:100px;
    width:50px;
    height:50px;
    margin-left:5px;
    margin-right:5px;
    color:#79681A;
    text-align:center;
    font-weight:750;
    font-size:28px;
    position:relative;
}
.circle-text{
    margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.siapa-ini{
    position:absolute;
    margin-top:210px;
    margin-left:100px;
}
.main-bg-phone{
    display:none;
}

@media only screen and (max-width:550px){
    margin-top:-190px!important;
    .main-section{
        margin-top:-340px;
    }
    .bola-bulet{
        display:none
    }
    .sec-title{
        margin-top:0px;
    }
    .circle-item{
        width:35px;
        height:35px;
        font-size:20px;
    }
    .circle-row{
        flex-wrap:wrap;
        width:100%;
        justify-content:center;
    }
    .circle-item{
        display:none
    }
    .parent-fixed{
        display:inline-block;
    }
    .siapa-ini{
        width:35%
    }
    .foto-kiri{
        width:40%;
    }
    .decor-foto-kiri{
        width:20%;
        margin-top:570px;
    }
    .foto-kanan{
        width:40%;
        margin-top:350px;
    }
    .decor-foto-kanan{
        width:20%;
        margin-top:290px;
    }
    .main-bg{
        display:none
    }
    .main-bg-phone{
        position:absolute;
    z-index:0;
    width:100vw;
    display:inline-block;
    }
}
`;
