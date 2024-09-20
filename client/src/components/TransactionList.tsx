import React from 'react';
import { Transaction } from '../types/Transaction';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount (USD)</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn) => (
          <tr key={txn.id}>
            <td>{txn.id}</td>
            <td>{new Date(txn.date).toLocaleDateString()}</td>
            <td>{txn.description}</td>
            <td
              style={{ color: txn.amount < 0 ? 'red' : 'green' }}
            >
              {txn.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
