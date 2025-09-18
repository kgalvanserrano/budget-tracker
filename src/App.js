import './App.css'
import { useEffect, useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import ExpensesByDescriptionChart from './components/ExpensesByDescriptionChart';
import AuthForm from './components/AuthForm';
import Header from './components/Header';

function App() {
  // Removed duplicate transactions state declaration
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // user state for authentication
  const [user, setUser] = useState(null);

  // login handler
  const handleLogin = (email) => {
    setUser(email);
    localStorage.setItem('user', email); // mock login
  };

  // intit state that reads localStorage once
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // logout handler
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  // load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);
  // save transactions to localStorage on change
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
            <Header user={user} onLogout={handleLogout} />
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