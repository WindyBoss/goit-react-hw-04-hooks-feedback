import { useReducer } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

import { StyledContainer } from './Reviews.styled';

function setFeedbacks(state, action) {
  return { ...state, [action]: state[action] + 1 };
}

const CollectReviews = () => {
  const [state, dispatch] = useReducer(setFeedbacks, {
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;

  const changeState = (evt) => {
    const { value } = evt.target;
    dispatch(value);
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / (good + neutral + bad)) * 10000) / 100;
  }

  return (
    <StyledContainer>
      <Section title="Please Leave Feedback">
        <FeedbackOptions state={state} onLeaveFeedback={changeState}></FeedbackOptions>
      </Section>
      {isNaN(countPositiveFeedbackPercentage()) ? (
        <Notification message={"There is no feedback"} />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      )}
    </StyledContainer>
  );
};

export default CollectReviews;
