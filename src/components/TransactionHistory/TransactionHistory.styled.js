import styled from '@emotion/styled';

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  max-width: calc((100% - 2 * 30px) / 3);
  margin: ${props => props.theme.space[4]}px auto;
  border: 1px solid ${props => props.theme.colors.secondaryText};
`;
export const StyledHead = styled.thead`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;
export const StyledRow = styled.tr`
  display: flex;
  :nth-of-type(2n) {
    background-color: ${props => props.theme.colors.secondaryText};
  }
`;
export const StyledColumn = styled('td', 'th')`
  width: calc(100% / 3);
  :not(:first-of-type) {
    text-align: center;
  }
  :not(:last-of-type) {
    border-right: 1px solid ${props => props.theme.colors.white};
  }
  :first-of-type {
    padding-left: ${props => props.theme.space[6]}px;
  }
  padding: ${props => props.theme.space[4]}px 0;
`;
