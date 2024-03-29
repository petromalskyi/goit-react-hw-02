import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positive,
}) {
  return (
    <>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {positive ? positive : '0'}%</p>
    </>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
 neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positive: PropTypes.number,
};