import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import Expenselist from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  
  // Get Value from DropDwon to Show Filtered List
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {/* Dynamic Listing */}
        <Expenselist items={filteredExpenses} />
        {/*If Else Condition Used here */}
        {/* {filteredExpenses.length === 0 ? ( 
          <h2>Nothing is here.</h2>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          ))
        )}; */}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}; */}

        {/* Static / Hard Coded */}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
      </Card>
    </div>
  );
}

export default Expenses;