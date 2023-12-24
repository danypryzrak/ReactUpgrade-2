import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Statistics/FeedbackOptions';
import { Section } from './Statistics/Section';
import { Notification } from './Statistics/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = ev => {
    const name = ev.target.name;
    setState(prevState => ({ ...prevState, [name]: state[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    const positive = (good * 100) / total;
    return Math.round(positive);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleClick} />
      </Section>

      {state.good > 0 || state.neutral > 0 || state.bad > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
