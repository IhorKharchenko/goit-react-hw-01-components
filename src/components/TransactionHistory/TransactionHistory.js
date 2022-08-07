import {
  StyledRow,
  StyledColumn,
  StyledTable,
  StyledHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTable>
      <StyledHead>
        <StyledRow>
          <StyledColumn>Type</StyledColumn>
          <StyledColumn>Amount</StyledColumn>
          <StyledColumn>Currency</StyledColumn>
        </StyledRow>
      </StyledHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <StyledRow key={id}>
            <StyledColumn>{type}</StyledColumn>
            <StyledColumn>{amount}</StyledColumn>
            <StyledColumn>{currency}</StyledColumn>
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
};
