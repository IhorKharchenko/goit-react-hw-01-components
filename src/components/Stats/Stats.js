import PropTypes from 'prop-types';
import { StyledListItem, StyledStat, StyledText } from './Stats.styled';
export const Stats = ({ text, stat }) => {
  return (
    <StyledListItem>
      <StyledText>{text}</StyledText>
      <StyledStat>{stat}</StyledStat>
    </StyledListItem>
  );
};
Stats.propTypes = {
  text: PropTypes.string.isRequired,
  stat: PropTypes.number.isRequired,
};
