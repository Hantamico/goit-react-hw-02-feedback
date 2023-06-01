import PropTypes from 'prop-types'

import css from "./statistics.module.css"

export default function Statistics({good, neutral, bad, total, percentage }) {
    return (
        <ul className={css.stat__list}>
            <li className={css.stat__item}><p>Good:{good}</p></li>
            <li className={css.stat__item}><p>Neutral:{neutral}</p></li>
            <li className={css.stat__item}><p>Bad:{bad}</p></li>
            <li className={css.stat__item}><p>Total:{total}</p></li>
            <li className={css.stat__item}><p>Percentage:{percentage}%</p></li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.string,
}