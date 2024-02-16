import css from './Options.module.css';

export default function Options({ totalFeedback, onUpdateFeedback, onReset }) {
  return (
    <div>
      <button className={css.btn} onClick={() => onUpdateFeedback('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => onUpdateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onUpdateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
