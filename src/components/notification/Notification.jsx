import PropTypes from 'prop-types';
import css from './Notification.module.css'

export default function Notification({messageNoFeedback}) {
    return (
        //  <p className={css.text}>No feedback yet</p>
         <p className={css.text}>{messageNoFeedback}</p>

    )
};

Notification.propTypes = {
  messageNoFeedback: PropTypes.string,
};
