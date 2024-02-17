import PropTypes from 'prop-types';
import css from './Description.module.css';

export default function Description({nameOfCafe, leaveFeedback}) {
  return (
    <>
      <h1 className={css.title}>{nameOfCafe}</h1>
      <p className={css.text}>{leaveFeedback}</p>
    </>
  );
}

Description.propTypes = {
  nameOfCafe: PropTypes.string,
  leaveFeedback: PropTypes.string
};