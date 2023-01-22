import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../../libs/theme/Theme';
import { PageTitle } from '../../libs/core/PageTitle';
import Input from '../../libs/core/Input/Input';
import { Form, Formik } from 'formik';
import { Button } from '../../libs/core/Buttons/Button';

const useStyles = createUseStyles((theme: Theme) => ({
  page: {
    backgroundColor: theme.colors.black,
    height: '100vh',
  },
  container: {
    margin: theme.marginBase * 2,
  },
}));

interface Values {
  email: string,
  password: string,
  confirmPassword: string,
}

export const Register = () => {
  const classes = useStyles({ theme });

  const submit = (values: Values) => {
    console.log('OK');
    console.log(values);
  };

  return (
    <div className={classes.page}>
      <PageTitle text={'Sign up'} />
      <div className={classes.container}>
        <Formik initialValues={{ email: '', password: '', confirmPassword: '' }} onSubmit={submit}>
          <Form>
            <Input title='Email' name='email' />
            <Input title='Password' name='password' type='password' eye />
            <Input title='Confirm Password' name='confirmPassword' type='password' eye />
            <Button text='Join' type='submit' />
          </Form>
        </Formik>
      </div>
    </div>
  );
};