import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--font-share-mono);
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  border-radius: 5px none;
  padding: 10px 50px 10px 50px;
  box-shadow: 1px 1px 3px var(--gray-2);
  
  hr {
    margin: 10px 0 10px 0;
    width: 100%;
    border: 2px;
    height: 2px;
    background-color: var(--gray-4);
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  width: 100%;
  height: 50px;

  span,
  p {
    margin-left: 10px;
    color: var(--black-2);
  }
  div {
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    display: flex;
    span {
      margin-right: 10px;
    }
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 100%;
  /* height: 70px; */
  span,
  p {
    font-size: 1.3rem;

    color: var(--black-2);
    margin-bottom: 15px;
    margin-left: 10px;

  }
  div {
    display: flex;
    width: 100%;
    button {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 10px 0 10px;
    }
    div {
      display: flex;
    }
  }
`;
