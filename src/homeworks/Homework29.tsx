import { useState, ChangeEvent } from "react";

import { Homework29Wrapper, InputButtonWrapper, OutputWrapper } from "./styles"

import WeatherInput from "../components/WeatherInput"
import WeatherButton from "../components/WeatherButton"

function Homework29() {

    const [inputText, setInputText] = useState<string>("");
    const [textData, setTextData] = useState<string | undefined>(undefined);


    const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
      };

      const getText = () => {
        if(inputText.length === 0){
            alert("Bitte geben Sie die Daten ein");
            return;
        }
        setTextData(inputText);
      }


  return (
    <Homework29Wrapper>
      <InputButtonWrapper>
        <WeatherInput value={inputText} onChange={onChangeText} />
        <WeatherButton onClick={getText} />
      </InputButtonWrapper>
      <OutputWrapper>{textData}</OutputWrapper>
    </Homework29Wrapper>
  )
}
export default Homework29;
