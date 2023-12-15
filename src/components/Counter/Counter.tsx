import { useState } from "react"

import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  const [counter, setCounter] = useState<number>(0)

  const onPlus = (): void => {
    setCounter((prevValue: number) => prevValue + 1)
  }
  const multiply = (): void => {
    setCounter((prevValue: number) => prevValue * 2)
  }

  const onMinus = (): void => {
    setCounter((prevValue: number) => prevValue - 1)
  }
  const divide = (): void => {
    setCounter((prevValue: number) => prevValue / 2)
  }

  const roundedValue = counter.toFixed(2)

  return (
    <CounterWrapper>
      <Button name="divide" onClick={divide} />
      <Button name="-" onClick={onMinus} />
      <Count>{roundedValue}</Count>
      <Button name="+" onClick={onPlus} />
      <Button name="multiply" onClick={multiply} />
    </CounterWrapper>
  )
}
export default Counter
