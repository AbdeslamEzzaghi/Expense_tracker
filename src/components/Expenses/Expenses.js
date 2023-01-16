import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState(
    new Date().getFullYear().toString()
  );

  const filteredExpenseItemList = props.expenses.filter(
    (element) => element.date.getFullYear().toString() === yearFilter
  );

  const filterByYearHandler = (year) => {
    console.log(year);
    setYearFilter(year);
  };
  /*(filteredExpenseItemList.length > 0) ? filteredExpenseItemList.map((element) => (
    <ExpenseItem
    key={element.id}
    title={element.title}
    amount={element.amount}
    date={element.date}
  />
)) : <p>no expenses for this year</p>*/
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearFilter}
          onFilterByYear={filterByYearHandler}
        />
        <ExpensesChart expenses={filteredExpenseItemList} />
        <ExpensesList expensesList={filteredExpenseItemList} />
      </Card>
    </div>
  );
};
export default Expenses;
