import styled from '@emotion/styled';

export const StyledSection = styled.section`
  display: block;
  width: calc((100% - 2 * 30px) / 3);
  margin: ${props => props.theme.space[4]}px auto;
  padding: ${props => props.theme.space[5]}px;
  background-color: ${props => props.theme.colors.background};
`;

export const StyledTitle = styled.h2`
  display: block;
  margin-top: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  text-transform: uppercase;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  color: #4b545b;
`;
export const StyledList = styled.ul`
  display: flex;
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;
