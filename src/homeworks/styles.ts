import styled from "styled-components"

import {WeatherImage} from 'assets'

export const Homework29Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  background-image: url(${WeatherImage});
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 12px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const OutputWrapper = styled.div`
display: flex;
  width: 709px;
  height: 129px;
  padding: 20px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
  font-size: 25px;
  color: white;
`;

