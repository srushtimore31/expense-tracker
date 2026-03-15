function ExpenseItem({ expense, deleteExpense }) {

  return (
    <div className="expense-item">

      <div>
        <h3>{expense.name}</h3>
        <p>{expense.category}</p>
      </div>

      <div>
        ${expense.amount}
      </div>

      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>

    </div>
  );
}

export default ExpenseItem;