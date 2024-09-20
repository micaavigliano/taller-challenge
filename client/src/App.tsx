import React, { useEffect, useState } from 'react';
import { Transaction } from './types/Transaction';
import { fetchTransactions } from './api/transactions';
import TransactionList from './components/TransactionList';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import Summary from './components/Summary';

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortField, setSortField] = useState<'date' | 'amount' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const transactionsPerPage = 5;

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    let filtered = transactions;

    if (startDate) {
      filtered = filtered.filter(
        (txn) => new Date(txn.date) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (txn) => new Date(txn.date) <= endDate
      );
    }

    setFilteredTransactions(filtered);
    setCurrentPage(1);
  }, [startDate, endDate, transactions]);


  const handleSort = (field: 'date' | 'amount') => {
    let order: 'asc' | 'desc' = 'asc';
    if (sortField === field && sortOrder === 'asc') {
      order = 'desc';
    }
    setSortField(field);
    setSortOrder(order);

    const sorted = [...filteredTransactions].sort((a, b) => {
      if (field === 'date') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      } else {
        return order === 'asc' ? a.amount - b.amount : b.amount - a.amount;
      }
    });

    setFilteredTransactions(sorted);
  };

  const indexOfLastTxn = currentPage * transactionsPerPage;
  const indexOfFirstTxn = indexOfLastTxn - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTxn, indexOfLastTxn);
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const totalAmount = filteredTransactions.reduce((sum, txn) => sum + txn.amount, 0);

  return (
    <div>
      <h1>Payment Transaction Dashboard</h1>

      {error && (
        <div role="alert">
          {error}
        </div>
      )}

      <Filters
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      <Summary
        totalTransactions={filteredTransactions.length}
        totalAmount={totalAmount}
      />

      <div className="mb-3">
        <button
          onClick={() => handleSort('date')}
        >
          Sort by Date {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button
          onClick={() => handleSort('amount')}
        >
          Sort by Amount {sortField === 'amount' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
      </div>

      <TransactionList transactions={currentTransactions} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
