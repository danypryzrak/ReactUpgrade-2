import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Statistics/FeedbackOptions';
import { Section } from './Statistics/Section';
import { Notification } from './Statistics/Notification';
const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleClick = ev => {
    const name = ev.target.name;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = (good * 100) / total;
    return Math.round(positive);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick} />
        </Section>

        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
