import React from 'react';

interface SummaryProps {
  totalTransactions: number;
  totalAmount: number;
}

const Summary: React.FC<SummaryProps> = ({
  totalTransactions,
  totalAmount,
}) => {
  return (
    <div>
      <h5>Summary</h5>
      <p>Total Transactions: {totalTransactions}</p>
      <p>
        Total Amount: $
        {totalAmount.toFixed(2)}
      </p>
    </div>
  );
};

export default Summary;
