import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be atleast 3 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{11}$/, 'Invalid phone number'),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  password: Yup.string().required('Password is required'),
  gender: Yup.string().required('Gender is required'),
  country: Yup.string().required('Select your country'),
  interests: Yup.array()
    .min(1, 'Select at leats one interest')
    .required('Select at leats one interest'),
  terms: Yup.boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.'),
  // .test('', 'Password should not include username', (value) => {
  //   if (value) {
  //     return !value
  //       .toLowerCase()
  //       .includes(formik.values.name.toLowerCase());
  //   }
  // }),
});

export default validationSchema;
