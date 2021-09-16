import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const[enteredTitle,setEnteredTitle] = useState('');
    const[enteredAmount,setEnteredAmount] = useState('');
    const[enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>  setEnteredTitle(event.target.value);
    const amountChangeHandler = (event) =>  setEnteredAmount(event.target.value);
    const dateChangeHandler = (event) =>  setEnteredDate(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate) 
        };

        props.onExpenseDataSave(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.toggleInitialSection();
    }

  return (
    <form className="new-expense__controls" onSubmit={submitHandler} >
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
      </div>
      <label>Date</label>
      <div className="new-expense__control">
        <input type="date" min="2021-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.toggleInitialSection}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
