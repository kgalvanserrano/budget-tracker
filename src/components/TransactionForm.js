// holds input state locally
// updates state as the user types (onChange)
// prevents page reload on form submit (e.preventDefault())
// builds a transaction object and passes it up to App
// resets form fields after submission

import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const isValid =
    description.trim() !== "" &&
    amount > 0 &&
    (type === "income" || type === "expense");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError("Please fill in all fields correctly.");
      return;
    }
    if (amount <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
    };
    addTransaction(newTransaction);

    // reset form
    setDescription("");
    setAmount(0);
    setType("income");
  };

  return (
    <div className="transaction-form">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={!isValid}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
