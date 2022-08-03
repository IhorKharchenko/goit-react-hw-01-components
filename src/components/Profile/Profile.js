import PropTypes from 'prop-types';
import { Stats } from '../Stats/Stats';
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
    <div>
      <div>
        <img src={avatar} alt="" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <Stats text={'followers'} stat={followers} />
        <Stats text={'views'} stat={views} />
        <Stats text={'likes'} stat={likes} />
      </ul>
    </div>
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
