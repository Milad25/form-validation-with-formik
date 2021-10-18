import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import validationSchema from '../common/ValidationSchema';
import Input from '../common/Input';
import RadioInput from '../common/RadioInput';
import { addNewUser, getOneUser } from '../services/serviceMethods';
import SelectOption from '../common/SelectOption';
import CheckboxInput from '../common/CheckboxInput';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  passwordConfirm: '',
  password: '',
  gender: '',
  country: '',
  interests: [],
  terms: false,
};

const options = [
  { value: '', label: 'Select...' },
  { value: 'Iran', label: 'Iran' },
  { value: 'US', label: 'US' },
  { value: 'England', label: 'England' },
  { value: 'Iraq', label: 'Iraq' },
];

const radioOptions = [
  { value: '0', label: 'male' },
  { value: '1', label: 'female' },
];

const checkboxOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

const onSubmit =  (values) => {
  try {
     addNewUser(values);
  } catch (err) {
    console.log(err);
  }
  console.log('Form Submitted');
};

const SignupForm = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    getOneUserHandler();
  }, []);

  const getOneUserHandler = async () => {
    try {
      const { data } = await getOneUser(1);
      setFormData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: formData || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  // console.log(formik.values.terms);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input label='name' name='name' formik={formik} />
      <Input label='email' name='email' formik={formik} />
      <Input label='phone number' name='phoneNumber' formik={formik} />
      <Input label='password' name='password' type='password' formik={formik} />
      <Input
        label='confirm password'
        name='passwordConfirm'
        type='password'
        formik={formik}
      />

      <RadioInput formik={formik} nameValue='gender' options={radioOptions} />

      <SelectOption formik={formik} options={options} nameValue='country' />

      <CheckboxInput
        formik={formik}
        options={checkboxOptions}
        nameValue='interests'
      />

      <div className='formControl'>
        <input
          type='checkbox'
          id='terms'
          value={true}
          name='terms'
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        <label htmlFor='terms'>terms and conditions</label>
        <div>
          {formik.errors.terms && formik.touched.terms && (
            <p className='error'>{formik.errors.terms}</p>
          )}
        </div>
      </div>

      <button
        type='submit'
        className={!formik.isValid ? 'not-allowed' : 'allowed'}
        disabled={formik.isValid ? false : true}
      >
        submit
      </button>
    </form>
  );
};

export default SignupForm;
