import styled from '@emotion/styled';

export const StyledFriendList = styled.ul`
  display: block;
  width: calc((100% - 2 * 30px) / 3);
  margin: ${props => props.theme.space[4]}px auto;
  padding: ${props => props.theme.space[4]}px;
  list-style: none;
`;
export const StyledFriendListItem = styled.li`
  display: flex;
  padding: ${props => props.theme.space[3]}px;
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
  align-items: center;
  box-shadow: 0 2px 2px 2px ${props => props.theme.colors.background};
`;
export const StyledOnlineStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props =>
    props.isOnline ? props.theme.colors.primary : props.theme.colors.black};
  margin-right: ${props => props.theme.space[3]}px;
`;
export const StyledImage = styled.img`
  margin-right: ${props => props.theme.space[3]}px;
`;
