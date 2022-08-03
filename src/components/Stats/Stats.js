import PropTypes from 'prop-types';
export const Stats = ({ text, stat }) => {
  return (
    <li>
      <span>{text}</span>
      <span>{stat}</span>
    </li>
  );
};
Stats.propTypes = {
  text: PropTypes.string.isRequired,
  stat: PropTypes.number.isRequired,
};
