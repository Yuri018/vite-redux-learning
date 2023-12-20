import styled from "styled-components";

export const CatFactsWrapper = styled.div`
display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const CatFactsContainer = styled.div`
  display: flex;
  width: 500px;
  height: fit-content;
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px;
`

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: bold;
`