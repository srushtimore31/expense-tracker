import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";
import "./styles/main.css";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [filter, setFilter] = useState("All");

  // Load expenses from localStorage on startup
  useEffect(() => {
    const saved = localStorage.getItem("expenses");

    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  }

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <div className="filter">
        <label>Filter: </label>

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Marketing</option>
          <option>Utilities</option>
          <option>Other</option>
        </select>
      </div>

      <div className="dashboard">

        <div className="panel">
          <ExpenseList
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
          />
        </div>

        <div className="panel">
          <SummaryPanel expenses={expenses} />

          <CurrencyConverter
            expenses={expenses}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
        </div>

      </div>

    </div>
  );
}

export default App;