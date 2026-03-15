import { useState } from "react";

function ExpenseForm({ addExpense }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !amount) return;

    const newExpense = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      category
    };

    addExpense(newExpense);

    setName("");
    setAmount("");
    setCategory("Food");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Marketing</option>
        <option>Utilities</option>
        <option>Other</option>
      </select>

      <button type="submit">Add Expense</button>

    </form>
  );
}

export default ExpenseForm;