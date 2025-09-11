import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function SpendingChart({ transactions }) {
  const totalIncome = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const totalExpense = transactions.reduce((acc, transaction) => {
    if (transaction.type === "expense") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const chartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  return (
    <div>
      <h2>Spending Chart</h2>
      <Pie data={chartData} options={{ responsive: true }} />
    </div>
  );
}
// accept transactions as a prop from App
// calculate total income and total expenses
// use a charting library (e.g., Chart.js, Recharts) to render a bar chart
// x-axis: categories (Income, Expenses)
// y-axis: amounts
