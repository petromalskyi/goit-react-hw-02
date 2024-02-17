import css from './Options.module.css';

export default function Options({ totalFeedback, onFeedbackUpdate, onFeedbackReset }) {
  return (
    <div>
      <button className={css.btn} onClick={() => onFeedbackUpdate('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => onFeedbackUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onFeedbackUpdate('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && <button className={css.btn} onClick={onFeedbackReset}>Reset</button>}
    </div>
  );
}
