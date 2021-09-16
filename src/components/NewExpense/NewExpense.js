import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const[showInitialModal,setShowInitialModal] = useState(true);

    const showHideInitialSectionHandler = () => {
        setShowInitialModal(prevState => !prevState);
    }

    const expenseDataSaveHandler = expenseData => {
        const newExpenseDate = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(newExpenseDate);
    }

    return(
        <div className="new-expense">
            {showInitialModal && <button onClick={showHideInitialSectionHandler}>Add New Expense</button>}
            {!showInitialModal && <ExpenseForm onExpenseDataSave={expenseDataSaveHandler} toggleInitialSection={showHideInitialSectionHandler} />}
        </div>
    )

}

export default NewExpense;