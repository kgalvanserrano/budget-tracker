export default function Summary ({ transactions }) {
    const totalIncome = transactions.filter()
    const totalExpense =  transactions.reduce()
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