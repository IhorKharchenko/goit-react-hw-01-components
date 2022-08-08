import { Stats } from '../Stats/Stats';
import PropTypes from 'prop-types';
import { StyledList, StyledSection, StyledTitle } from './Statistics.styled';
// const Stats = ({ label, percentage }) => {
//   return (
//     <li>
//       <span>{label}</span> <span>{percentage}</span>
//     </li>
//   );
// };
export const Statistics = ({ title, stats }) => {
  return (
    <StyledSection>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledList>
        {stats.map(stat => (
          <Stats key={stat.id} text={stat.label} stat={stat.percentage} />
        ))}
      </StyledList>
    </StyledSection>
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
