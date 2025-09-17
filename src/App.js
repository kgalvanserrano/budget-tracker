import './App.css'
import { useEffect, useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import ExpensesByDescriptionChart from './components/ExpensesByDescriptionChart';
import AuthForm from './components/AuthForm';

function App() {
  // Removed duplicate transactions state declaration

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser(email);
    localStorage.setItem('user', email); // mock login
  };

  // intit state that reads localStorage once
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App">
      {!user ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <>
          <header>
            <h1>Budget Tracker</h1>
            <p>Start adding income and expenses.</p>
            <p>Welcome, {user}</p>
          </header>
          <main>
            <TransactionForm addTransaction={addTransaction} />
            <TransactionList transactions={transactions} />
            <Summary transactions={transactions} />
            <IncomeExpenseChart transactions={transactions} />
            <ExpensesByDescriptionChart transactions={transactions} />
          </main>
        </>
      )}
    </div>
  );
}

export default App