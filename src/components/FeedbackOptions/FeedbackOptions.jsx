import React from "react";
import PropTypes from 'prop-types';

import css from "./feedback_options.module.css"

export default function FeedbackOptions({ options, handleFeedback }) {
    return (
        <div>
            {options.map((option) => 
                 <button className={css.options__btn} key={option} name={option} onClick={handleFeedback}>{option}</button>
            )}
        </div>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};