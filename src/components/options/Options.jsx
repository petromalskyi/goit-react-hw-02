import css from './Options.module.css';

export default function Options({ totalFeedback, onUpdateFeedback, onReset }) {
  return (
    <>
      <button className={css.button} onClick={() => onUpdateFeedback('good')}>
        Good
      </button>
      <button
        className={css.button}
        onClick={() => onUpdateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
}
