import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, SetIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        SetIsEditing(false);
    }

    const startEditingHandler = () => {
        SetIsEditing(true);
    }

    const stopEditingHandler = () => {
        SetIsEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>

}

export default NewExpense;