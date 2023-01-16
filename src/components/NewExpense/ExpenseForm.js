import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(new Date().toISOString().substring(0, 10));
    props.onHandelCancelButton();
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log("Cancel");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(new Date().toISOString().substring(0, 10));
    props.onHandelCancelButton();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
