import React from 'react';

const CheckboxInput = ({ options, nameValue, formik }) => {
  
  return (
    <div className='formControl'>
      {options.map((option) => {
        return (
          <React.Fragment key={option.value}>
            <input
              type='checkbox'
              id={option.value}
              value={option.value}
              name={nameValue}
              onChange={formik.handleChange}
              checked={formik.values[nameValue].includes(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
            {formik.errors[nameValue] && formik.touched[nameValue] && (
              <p className='error'>{formik.errors[nameValue]}</p>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CheckboxInput;
