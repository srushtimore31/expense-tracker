import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {

  if (expenses.length === 0) {
    return (
      <>
        <h2>Expenses</h2>
        <div className="empty">
          <p>No expenses added yet</p>
          <small>Add your first expense above</small>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>Expenses</h2>
      {expenses.map(exp => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          deleteExpense={deleteExpense}
        />
      ))}
    </>
  );
}

export default ExpenseList;