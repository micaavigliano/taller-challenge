
export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await fetch('http://localhost:8080/api/transactions');

  if (!response.ok) {
    throw new Error('Error fetching transactions');
  }

  return response.json();
};