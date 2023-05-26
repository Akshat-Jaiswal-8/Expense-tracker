import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";

function Expenses(props) {
    console.log(props);

    useState();

    const [FilteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === FilteredYear;
    });
    

    return (
        <div className="expenses">
            <ExpensesFilter
                selected={FilteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />;
            
        </div>
    );
}

export default Expenses;
