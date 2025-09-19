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

    const palette = [
      '#2ECC71', '#34D399', '#22C55E', '#10B981', '#059669', '#16A34A', '#65A30D'
    ];
    const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: labels.map((_, i) => palette[i % palette.length]),
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
      <h2>Expenses by Description</h2>
      {expenses.length > 0 ? (
        <div className="chart-wrap">
          <Pie data={chartData} options={options} />
        </div>
      ) : (
        <p className="empty-state">No expenses yet.</p>
      )}
    </div>
  );
}
