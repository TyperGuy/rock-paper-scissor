import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #2c3e50;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const GameBoard = styled.div`
  width: 100%;
  height: 90%;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;
export const ScoreContainer = styled.div`
  height: 88px;
  width: 296px;
  border-radius: 8px;
  background: linear-gradient(0deg, #bdc3c7, #bdc3c7),
    linear-gradient(0deg, #ecf0f1, #ecf0f1);
  border: 2px solid #bdc3c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #34495e;
  @media (min-width: 1366px) {
    width: 819px;
  }
`;

export const Label = styled.span`
  font-family: Roboto;
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;
export const Score = styled.span`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Flex = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1366px) {
    width: 800px;
  }
`;

export const OpctionContainer = styled.div`
  width: 310px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 1366px) {
    width: 800px;
    height: 500px;
  }
`;
export const ResultContainer = styled.div`
  width: 310px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  @media (min-width: 1366px) {
    width: 800px;
  }
`;

export const Message = styled.span`
  width: 296px;
  font-family: Roboto;
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
`;
