import styled from '@emotion/styled';
export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
  width: calc((100% / 3));
`;

export const StyledText = styled.span`
  margin: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.secondaryText};
`;
export const StyledStat = styled.span`
  margin: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.text};
`;
