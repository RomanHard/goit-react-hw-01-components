import PropTypes from 'prop-types';
import './statistic-module.css';

export default function Statics({ title, newStats }) {
  const h2 = <h2 className="title"> {title}</h2>;
  return (
    <section className="statistics">
      {title && h2}
      <ul className="stat-list">
        <li className="item">
          <span className="label">{newStats[0].label}</span>
          <span className="percentage">{newStats[0].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">{newStats[2].label}</span>
          <span className="percentage">{newStats[2].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">{newStats[1].label}</span>
          <span className="percentage">{newStats[1].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">{newStats[3].label}</span>
          <span className="percentage">{newStats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
}

Statics.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
