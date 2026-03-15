import { calculateCategoryTotals } from "../utils/categoryTotals";

function SummaryPanel({ expenses }) {

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const categoryTotals = calculateCategoryTotals(expenses);

  return (
    <div className="summary">

      <h2 className="summary-total">Total: ${total.toFixed(2)}</h2>

      <h3>Category Breakdown</h3>

      <ul>
        {Object.entries(categoryTotals).map(([category, value]) => (
          <li key={category}>
            {category}: ${value.toFixed(2)}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SummaryPanel;