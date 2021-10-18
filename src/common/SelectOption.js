const SelectOption = ({ nameValue, options, formik }) => {
  

  return (
    <div className='formControl'>
      <select
        value={formik.values[nameValue]}
        {...formik.getFieldProps(nameValue)}
      >
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      {formik.errors[nameValue] && formik.touched[nameValue] && (
        <p className='error'>{formik.errors[nameValue]}</p>
      )}
    </div>
  );
};

export default SelectOption;
