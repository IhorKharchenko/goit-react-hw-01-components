import PropTypes from 'prop-types';
import {
  StyledFriendListItem,
  StyledImage,
  StyledOnlineStatus,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendListItem>
      <StyledOnlineStatus isOnline={isOnline}></StyledOnlineStatus>
      <StyledImage src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
