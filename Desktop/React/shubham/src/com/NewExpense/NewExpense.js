import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense(props){
   
    const [isEdit,setIsEdit] = useState(false);

    const saveExpenseHandler = (enExpensedata) => {
        const expenseData ={
            ...enExpensedata,
            id: Math.random().toString()
        };
      //  console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEdit(false);
    }

    const startEdit = () => {
        setIsEdit(true);
    }

    const stopEdit = () => {
        setIsEdit(false);
    }
    return(
        <div className="new-expense">
         {!isEdit && (<button onClick={startEdit}>Add New Expense</button>)}
        
         {isEdit && (<ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEdit} />
          )}
        </div>

    )
}
export default NewExpense;