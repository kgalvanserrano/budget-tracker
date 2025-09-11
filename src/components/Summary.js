export default function Summary ({ transactions }) {
    const totalIncome = transactions.reduce((acc, transaction) => { // acc = accumulator
        if (transaction.type === "income") {
            return acc + transaction.amount;
        }
        return acc; // skip
    }, 0);

    const totalExpense = transactions.reduce((acc, transaction) => {
        if (transaction.type === "expense") {
            return acc + transaction.amount;
        }
        return acc; // skip
    }, 0);

    const netIncome = totalIncome - totalExpense;

    return (
        <div>
            <h2>Summary</h2>
            <p>Total Income: {totalIncome}</p>
            <p>Total Expense: {totalExpense}</p>
            <p>Net Income: {netIncome}</p>
        </div>
    );
}