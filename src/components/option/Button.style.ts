import styled from 'styled-components';


export const ButtonContainer = styled.div<{color:string}>`

  height: 130px;
  width: 130px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: red;
  box-sizing: border-box;
  background-color: #fff;
  border: 16px solid ${(props)=>props.color};
  margin: 10px;
  cursor: pointer;
  @media (min-width: 1366px) {
    width: 200px;
    height: 200px;
  }

`