import { useState } from 'react';
import css from './App.module.css';
import Description from '../description/Description';
// import Options from '../options/Options';
import Feedback from '../feedback/Feedback';

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };
  const reset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100,
  );

  return (
    <div className={css.container}>
      <Description></Description>
      {/* <Options
        totalFeedback={totalFeedback}
        onUpdateFeedback={updateFeedback}
        onReset={reset}
      ></Options> */}
      {totalFeedback ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          totalFeedback={totalFeedback}
          positive={positive}
        ></Feedback>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}

// import css from './Options.module.css';

// export default function Options({ totalFeedback, onUpdateFeedback, onReset }) {
//   return (
//     <>
//       <button className={css.btn} onClick={() => onUpdateFeedback('good')}>
//         Good
//       </button>
//       <button className={css.btn} onClick={() => onUpdateFeedback('neutral')}>
//         Neutral
//       </button>
//       <button className={css.btn} onClick={() => onUpdateFeedback('bad')}>
//         Bad
//       </button>
//       {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
//     </>
//   );
// }

// .btn {
//   margin-right: 5px;
//   margin-bottom: 15px;
// }
