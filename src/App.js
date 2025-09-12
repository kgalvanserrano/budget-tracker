import './App.css'
import { useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary';
import IncomeExpenseChart from './components/IncomeExpenseChart';
import ExpensesByDescriptionChart from './components/ExpensesByDescriptionChart';
function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <div className="App">
      <header>
        <h1>Budget Tracker</h1>
        <p>Start adding income and expenses.</p>
      </header>
      <main>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
        <Summary transactions={transactions} />
        <IncomeExpenseChart transactions={transactions} />
        <ExpensesByDescriptionChart transactions={transactions} />
      </main>
    </div>
  )
}

export default App