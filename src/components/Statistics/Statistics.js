import { Stats } from '../Stats/Stats';
import PropTypes from 'prop-types';
// const Stats = ({ label, percentage }) => {
//   return (
//     <li>
//       <span>{label}</span> <span>{percentage}</span>
//     </li>
//   );
// };
export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      <ul>
        {stats.map(stat => (
          <Stats key={stat.id} text={stat.label} stat={stat.percentage} />
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
