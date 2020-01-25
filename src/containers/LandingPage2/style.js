import styled from "styled-components";

export const LandingPage2Container = styled.div`
  height: 200vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .leaf {
    position: absolute;
    display: block;
  }
  .leaf:nth-child(1) {
    left: 20%;
    top: 50px;
    transform: rotate(-50deg);
    animation: animate-leaves 25s linear infinite;
  }
  .leaf:nth-child(2) {
    left: 30%;
    top: 220px;
    animation: animate-leaves 15s linear infinite;
  }
  .leaf:nth-child(3) {
    left: 45%;
    top: 55px;
    animation: animate-leaves 30s linear infinite;
  }
  .leaf:nth-child(4) {
    transform: rotate(50deg);
    left: 55%;
    top: 200px;
    animation: animate-leaves 35s linear infinite;
  }
  .leaf:nth-child(5) {
    left: 70%;
    top: 150px;
    animation: animate-leaves 45s linear infinite;
  }
  .leaf:nth-child(6) {
    transform: rotate(-50deg);
    top: 500px;
    left: 30%;
    animation: animate-leaves 35s linear infinite;
  }
  .leaf:nth-child(7) {
    top: 550px;
    left: 45%;
    animation: animate-leaves 30s linear infinite;
  }
  .leaf:nth-child(8) {
    top: 570px;
    left: 55%;
    animation: animate-leaves 20s linear infinite;
  }
  .leaf:nth-child(9) {
    top: 500px;
    left: 75%;
    animation: animate-leaves 25s linear infinite;
  }
  @keyframes animate-leaves {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    10% {
      opacity: 1;
    }
    20% {
      transform: translateX(-20px) rotate(45deg);
    }
    40% {
      transform: translateX(-20px) rotate(90deg);
    }
    60% {
      transform: translateX(20px) rotate(135deg);
    }
    80% {
      transform: translateX(-20px) rotate(180deg);
    }
    100% {
      top: 120%;
      transform: translateX(-20px) rotate(225deg);
    }
  }
`;
