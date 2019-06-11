import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DatePicker = ({ handleDayChange }) => {

    return (
        <div className="col-md-6">
            <DayPickerInput
                onDayChange={handleDayChange}
            />
        </div>
    )
}

export default DatePicker;

