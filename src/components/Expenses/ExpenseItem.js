import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("updated");
        console.log(title);
    };

    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                </div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>click here</button>
        </>
    );
}
export default ExpenseItem;
