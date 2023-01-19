import React from "react";
import './datePicker.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["M","T","W","T","F","S", "S"];

const DatePicker = (props) => {
    const date = new Date();
    // date.    
    return (
        <div className="date-picker">
            <ul className="list-days">
                {weekday.map((el, i) => {
                    let classs = (i === 4) ? `active` : ``;
                    return(
                        <li className={classs}>
                            <div className="day-of-week">{el}</div>
                            <div className="day-of-month">{i + 25}</div>
                        </li>
                    )
                })}

            </ul>
            <div className="month-picker">
                <button><div className="arrow left"></div></button>
                <span>March 2019</span>
                <button><div className="arrow right"></div></button>
            </div>
        </div>
    )
}

export default DatePicker