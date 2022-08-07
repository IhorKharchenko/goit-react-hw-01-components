import PropTypes from 'prop-types';
import { Stats } from '../Stats/Stats';
import { StyledProfile, StyledProfileInfo, StyledName, StyledText, StyledList } from './Profile.styled';
// const Stats = ({ text, stat }) => {
//   return (
//     <li>
//       <span>{text}</span> <span>{stat}</span>
//     </li>
//   );
// };

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledProfile>
      <StyledProfileInfo>
        <img src={avatar} alt={`${username}'s avatar`} width={280} />
        <StyledName>{username}</StyledName>
        <StyledText>{tag}</StyledText>
        <StyledText>{location}</StyledText>
      </StyledProfileInfo>
      <StyledList>
        <Stats text={'followers'} stat={followers} />
        <Stats text={'views'} stat={views} />
        <Stats text={'likes'} stat={likes} />
      </StyledList>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
