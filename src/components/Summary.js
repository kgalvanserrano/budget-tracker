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
            <div className="section card stack-sm">
                <h2>Summary</h2>
                <p><strong>Total Income:</strong> ${totalIncome}</p>
                <p><strong>Total Expenses:</strong> ${totalExpense}</p>
                <p><strong>Net Income:</strong> ${netIncome}</p>
            </div>
        );
}