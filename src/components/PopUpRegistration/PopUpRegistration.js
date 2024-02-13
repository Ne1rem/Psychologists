import { ErrorMessage, Form, Formik } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import icons from '../../img/icons.svg';
import * as Yup from 'yup';
import {
  Button,
  ErrorMsg,
  InputWrapper,
  Label,
  StyledField,
  SvgStyled,
  TextRegistration,
} from './PopUpRegistration.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/userSlice';

export const validateSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

const PopUpRegistration = ({ onClose }) => {


  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async values => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
            }))
        })
        .catch(console.error);
    onClose();
  };
  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    }
  };

  return (
    <div>
      <TextRegistration>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </TextRegistration>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Label>
              <InputWrapper>
                <StyledField
                  type="text"
                  name="name"
                  placeholder="Name"
                  $hasError={touched.name && errors.name}
                  value={values.name}
                  required
                />
                <ErrorMessage name="name" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Label>
              <StyledField
                type="email"
                name="email"
                placeholder="Email"
                $hasError={touched.email && errors.email}
                value={values.email}
                required
              />
              <ErrorMessage name="email" component={ErrorMsg} />
            </Label>
            <Label>
              <InputWrapper>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  $hasError={touched.password && errors.password}
                  value={values.password}
                  required
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('password')}
                >
                  <use
                    href={`${icons}#${
                      showPassword ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="password" component={ErrorMsg} />
              </InputWrapper>
            </Label>

            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PopUpRegistration;
