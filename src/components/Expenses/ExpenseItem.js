// import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // const [title,setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated!'); //This will schedule the re-render but the title is not re-evaluated yet
    //     console.log(title); // Hence the console log in this line will give the old value
    // }
    
return(
<Card className="expense-item">
    <ExpenseDate date={props.date} />
    <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
</Card>
)
}

export default ExpenseItem;