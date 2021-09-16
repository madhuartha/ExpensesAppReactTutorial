import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  let listOfExpenses = props.expenseItems.filter(
    (exp) => exp.date.getFullYear().toString() === selectedYear
  );

  const expenseFilterSelectionHandler = (filteredValue) => {
    setSelectedYear(filteredValue);
    listOfExpenses = props.expenseItems.filter(
      (exp) => exp.date.getFullYear().toString() === filteredValue
    );
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYearInDropDown={selectedYear}
        onFilterSelection={expenseFilterSelectionHandler}
      />
      <ExpensesChart expenses={listOfExpenses} />
      <li>
        <Card>
          <ExpensesList items={listOfExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
