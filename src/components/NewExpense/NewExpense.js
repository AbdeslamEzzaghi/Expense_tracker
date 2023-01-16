import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let [addExpensePanel, setAddExpensePanel] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      {addExpensePanel && (
        <button
          onClick={() => {
            setAddExpensePanel(false);
          }}
        >
          Add new expense
        </button>
      )}
      {!addExpensePanel && (
        <ExpenseForm
          onHandelCancelButton={() => {
            setAddExpensePanel(true);
          }}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
