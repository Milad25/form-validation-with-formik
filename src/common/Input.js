const Input = ({ label, name, formik, type = 'text' }) => {

  return (
    <div className='formControl'>
      <label>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        {...formik.getFieldProps({ name })}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className='error'>{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
