import React, {useState} from "react";
import './Expenses.css';
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
      console.log(selectedYear)
    };

    const filteredExpense=props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

   

    return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpense} /> 
      <ExpenseList items={filteredExpense} /> 
        
    </Card>
    );
}

export default Expenses;