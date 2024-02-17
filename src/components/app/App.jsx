import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../description/Description';
import Options from '../options/Options';
import Feedback from '../feedback/Feedback';
import Notification from '../notification/Notification';

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
const messageNoFeedback = 'No feedback yet';
const nameOfCafe ='Sip Happens Café';
const leaveFeedback = 'Please leave your feedback about our service by selecting one of the options below.'

  return (
    <div className={css.container}>
      <Description 
        nameOfCafe={nameOfCafe} 
        leaveFeedback = {leaveFeedback}>
      </Description>
      <Options
        totalFeedback={totalFeedback}
        onFeedbackUpdate={updateFeedback}
        onFeedbackReset={reset}
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
        <Notification 
          messageNoFeedback={messageNoFeedback}>
        </Notification>
      )}
    </div>
  );
}
