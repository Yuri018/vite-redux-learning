import styled from "styled-components"

export const UsersCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: fit-content;
  gap: 24px;
`

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
`

export const Paragraph = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  /* overflow-wrap: break-word; */
  font-size: 16px;
`
/*
Как показать точки, когда текст длинный
1.Задаете главному контейнеру фиксированную ширину, например 300px
2. Добавляете св-ва тексту: width: 100%;
  text-overflow: ellipsis; // показывает точки 
  overflow: hidden; // скрывает текст что не влез

  Если вы хотите перенносить текст на другие строки, то добавьте вашему тегу с текстом след св-во:
overflow-wrap: break-word;
*/
