import React from "react";
import { useState } from "react/cjs/react.development";
import './ExpenseForm.css';

function ExpenseForm(props){
const [enTitle, setEnTitle] = useState('');
const [enAmt, setAmt] = useState('');
const [enDat, setDat] = useState('');

// const [userInput, setUserInput] = useState({
//     enTitle : '',
//     enAmt : '',
//     enDat : ''
// })
    function titleChangeHandler(event){
        setEnTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enTitle : event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState,enTitle:event.target.value};
        // });
    }

    function amtChangeHandler(event){
        setAmt(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enAmt : event.target.value,
        // })
    }

    function datChangeHandler(event){
        setDat(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enDat : event.target.value,
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();
    

        const expenseData = {
            title : enTitle,
            amount : +enAmt,
            date : new Date(enDat)
        };
        props.onSaveExpenseData(expenseData);
       
        setEnTitle('');
        setAmt('');
        setDat('');
    };
    return(
        <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enAmt} onChange={amtChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enDat} onChange={datChangeHandler}/>
                </div>
            <div className="new-expense__actions">
                <button onclick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
            </div>
        </form>
    );
}

export default ExpenseForm;