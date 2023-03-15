import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #089471
`;

export const LogoStyle = styled.img`
  position: absolute;
  top: 12vh;
  width: 60vw;
  max-width: 1020px;
`;


export const Mouse = styled.img`
  position: absolute;
  bottom: 4vh;
  width: 32px;
  animation: upDownAnimation 3s linear 4;
  
  @keyframes upDownAnimation {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;