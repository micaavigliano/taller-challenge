export interface Transaction {
  id: string;
  date: string; // ISO format
  description: string;
  amount: number;
}

export const transactions: Transaction[] = [
  { id: '1', date: '2023-09-15', description: 'Payment to Vendor A', amount: 500.0 },
  { id: '2', date: '2023-09-17', description: 'Refund from Vendor B', amount: -150.0 },
  { id: '3', date: '2023-09-20', description: 'Payment to Vendor C', amount: 300.0 },
  { id: '4', date: '2023-09-25', description: 'Payment to Vendor D', amount: 1200.0 },
  { id: '5', date: '2023-10-01', description: 'Payment to Vendor E', amount: 700.0 },
  { id: '6', date: '2023-10-10', description: 'Refund from Vendor F', amount: -100.0 },
];