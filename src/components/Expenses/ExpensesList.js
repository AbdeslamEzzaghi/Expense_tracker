import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  const filteredExpenseItemList = props.expensesList;

  if (filteredExpenseItemList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenseItemList.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
