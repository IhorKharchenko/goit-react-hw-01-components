import styled from '@emotion/styled';

export const StyledProfile = styled.div`
  display: block;
  max-width: calc((100% - 2 * 30px) / 3);
  padding: ${props => props.theme.space[5]}px;
  margin: ${props => props.theme.space[4]}px auto;
  background-color: ${props => props.theme.colors.background};
`;

export const StyledProfileInfo = styled.div`
  padding: ${props => props.theme.space[3]}px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
`;
export const StyledName = styled.p`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
export const StyledText = styled.p`
  margin: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.secondaryText};
  font-size: ${props => props.theme.fontSizes.s};
`;
export const StyledList = styled.ul`
  display: flex;
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;
