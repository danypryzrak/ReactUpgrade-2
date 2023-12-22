export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>
            <span>Good: </span>
            {good}
          </p>
        </li>
        <li>
          <p>
            <span>Neutral: </span>
            {neutral}
          </p>
        </li>
        <li>
          <p>
            <span>Bad: </span>
            {bad}
          </p>
        </li>
        <li>
          <p>
            <span>Total: </span>
            {total}
          </p>
        </li>
        <li>
          <p>
            <span>Positive Feedback: </span>
            {positive}%
          </p>
        </li>
      </ul>
    </div>
  );
};
