import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_DATA = [
  {
    id: "e1",
    title: "Drawing Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 23)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12)
  }
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    //const newId = expenses.length + 1;
    const newExpense = {
      id: `e${expenses.length + 1}`,
      ...expense
    };
    //console.log(" app.js ");
    //console.log(newExpense);
    setExpenses((prevState) => [...prevState, newExpense]);
    //console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};
export default App;
