import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from './Card';
import './NewExpense/NewExpense.css';
  

function ExpenseItem(props) {
  const [title, setTitle]= useState(props.title);
  console.log('Expense item is evaluated')
  
  const clickHandler = () => {
    setTitle('Updated!!!!!')
    console.log(title);
  };

  return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <div className='new-expense button1'>
      <button onClick=  {clickHandler}>Chnage Title</button>
      </div>
    </Card>
    </li>
    );
  }
  
  export default ExpenseItem;