import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function ExpensesByDescriptionChart({ transactions }) {
    const expenses = transactions.filter((t) => t.type === "expense");
    const descriptionTotals = expenses.reduce((acc, expense) => {
        acc[expense.description] = (acc[expense.description] || 0) + expense.amount;
        return acc;
    }, {});

    const labels = Object.keys(descriptionTotals);
    const data = Object.values(descriptionTotals);

    const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0",
          "#FF9800",
        ],
      },
    ],
  };

   return (
    <div>
      <h2>Expenses by Description</h2>
      {expenses.length > 0 ? (
        <Pie data={chartData} options={{ responsive: true }} />
      ) : (
        <p>No expenses yet.</p>
      )}
    </div>
  );
}
