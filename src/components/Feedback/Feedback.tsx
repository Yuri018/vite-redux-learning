import { useDispatch, useSelector } from "react-redux"
import { actions } from "store/redux/feedback/feedbackSlise"
import { feedbackState } from "store/redux/feedback/selectors"

import { LikeIcon, DislikeIcon } from "assets"

import { FeedbackWrapper, Count, imageContainer } from "./styles"
import Button from "components/Button"

function Feedback() {
  const dispatch = useDispatch()
  const counter = useSelector(feedbackState)

  const like = () => {
    dispatch(actions.like())
  }
  const diseLike = () => {
    dispatch(actions.diseLike())
  }

  const reset = () => {
    dispatch(actions.resetResults())
  }
  return (
    <FeedbackWrapper>
      <img src={LikeIcon} alt="like" onClick={like} />
      <Count>{counter.likeCount}</Count>
      <img src={DislikeIcon} alt="diseLike" onClick={diseLike} />
      <Count>{counter.diseLikeCount}</Count>
      <Button name="Reset Results" type="button" onClick={reset} />
    </FeedbackWrapper>
  )
}

export default Feedback
