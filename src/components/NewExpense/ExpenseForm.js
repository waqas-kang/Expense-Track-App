import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Note: I Prefer Multiple State Because Its Safe

    const [enteredTitle, setEnteredTtitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // One State Instead of Multiple
    // const [userInput, setUserInput] = useState({
    //     enteredTtitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTtitle(event.target.value);

        // This is for One State
        // setUserInput({
        //     ...userInput,
        //     enteredTtitle: event.target.value,
        // });

        // Another way for One state
        // Its gaurantee for running accurate
        // Safer way to update latest state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTtitle: event.target.value};
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }


        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTtitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="0.1" step="0.1" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2023-01-01" value={enteredDate} onChange={dateChangeHandler} />
        </div>
    </div>
    <div className="new-expense__actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
    </div>
</form>

}

export default ExpenseForm;