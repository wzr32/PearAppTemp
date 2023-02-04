import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('First name is required'),
  last_name: yup
    .string()
    .required('Last name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required'),
  message: yup
    .string(),
});
