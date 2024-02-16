import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../description/Description';
import Options from '../options/Options';
import Feedback from '../feedback/Feedback';

const getStartOption = () => {
  const savedLocalStorage = window.localStorage.getItem('saved-clicks');
  return savedLocalStorage
    ? JSON.parse(savedLocalStorage)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [values, setValues] = useState(getStartOption);

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(values));
  }, [values]);

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
      <Options
        totalFeedback={totalFeedback}
        onUpdateFeedback={updateFeedback}
        onReset={reset}
      ></Options>
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
