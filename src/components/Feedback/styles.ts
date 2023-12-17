import styled from "styled-components"

import { colors } from "styles/colors"

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  min-width: 200px;
  height: fit-content;
  padding: 40px;
  background-color: ${colors.primary};
`

export const Count = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: ${colors.white};
`