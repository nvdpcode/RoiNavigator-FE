import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calender.css"
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../component/Home/actions/actions";


const Calendar = () => {
  const { inputsdata } = useSelector((state) => state.InputsReducer);
  const dispatch = useDispatch()
  const handleInputChange = (date) => {
    const formattedDate = date ? `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}` : null;
    dispatch(updateInput("date", formattedDate));
    
  };
  let dates = new Date(inputsdata.date)
  return (
    <DatePicker 
     showIcon
     selected={inputsdata.date ? dates : null}
     onChange={(date) => handleInputChange(date)}
    //  dateFormat={"YYYY/MM/DD"}
    
      />
  );
};

export default Calendar;