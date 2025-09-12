// accept transactions as a prop from App
// render each transaction (description, amount, type)
// style it so income/expenses are visually distinct
// red for expenses, green for income

export default function TransactionList({ transactions }) {
  transactions.sort((a, b) => b.id - a.id); // sort by most recent
  return (
    <ul className="transaction-list" style={{ listStyleType: "none", padding: 0 }}>
      {[...transactions] // make a shallow copy
        .sort((a, b) => b.id - a.id) // sort the copy
        .map((tx) => (
          <li key={tx.id} className={tx.type === "income" ? "green" : "red"}>
            {tx.description}: ${tx.amount.toFixed(2)} ({tx.type})
          </li>
        ))}
    </ul>
  );
}
