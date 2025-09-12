import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function SpendingChart({ transactions }) {
    const [expenses, setExpenses] = useState([]);
    const addExpense = (category, amount) => {
        setExpenses((prev) => [...prev, { category, amount }]);
    }
    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});
    const labels = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);
    

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