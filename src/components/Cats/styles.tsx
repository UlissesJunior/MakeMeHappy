import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FEEFE7
`;

export const Img = styled.img`
  min-width: 60rem;
  min-height: 40rem;
  margin: 1vh;
  @media (max-width: 1080px) {
    width: 80vw;
    height: auto;
  }
`;