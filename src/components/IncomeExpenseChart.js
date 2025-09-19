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
        backgroundColor: [
          getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#1A7F5A',
          '#EF4444'
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim() || '#111827' }
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const label = ctx.label || '';
            const value = ctx.raw ?? 0;
            return `${label}: $${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          }
        }
      }
    }
  };

  return (
    <div className="section card">
      <h2>Spending Chart</h2>
      <div className="chart-wrap">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}