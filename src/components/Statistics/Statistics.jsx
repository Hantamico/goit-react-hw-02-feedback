// import PropTypes from 'prop-types'

export default function Statistics({good, neutral, bad, total, percentage }) {
    return (
        <ul>
            <li><p>Good:{good}</p></li>
            <li><p>Neutral:{neutral}</p></li>
            <li><p>Bad:{bad}</p></li>
            <li><p>Total:{total}</p></li>
            <li><p>Percentage:{percentage}%</p></li>
        </ul>
    );
};