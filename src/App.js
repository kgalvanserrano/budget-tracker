import './App.css'
import { useEffect, useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import ExpensesByDescriptionChart from './components/ExpensesByDescriptionChart';
import AuthForm from './components/AuthForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser(email);
    localStorage.setItem('user', email); // mock login
  };
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

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