import React from 'react';

const RadioInput = ({ formik, nameValue, options }) => {
  return (
    <div className='formControl'>
      {options.map((option) => {
        const { value, label } = option;

        return (
          <React.Fragment key={value}>
            <input
              type='radio'
              id={value}
              value={value}
              name={nameValue}
              onChange={formik.handleChange}
              checked={parseInt(formik.values[nameValue]) === parseInt(value)}
            />
            <label htmlFor={value}>{label}</label>
            {formik.errors[nameValue] && formik.touched[nameValue] && (
              <p className='error'>{formik.errors[nameValue]}</p>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RadioInput;
