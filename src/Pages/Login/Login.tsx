import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../../libs/theme/Theme';
import { PageTitle } from '../../libs/core/PageTitle';
import Input from '../../libs/core/Input/Input';
import { Form, Formik } from 'formik';
import { Button } from '../../libs/core/Buttons/Button';
import { useLogin } from '../../libs/api/src';


const useStyles = createUseStyles((theme: Theme) => ({
  page: {
    height: '100vh',
    maxWidth: theme.marginBase * 80,
    margin: '0 auto',
  },
  container: {
    margin: theme.marginBase * 2,
  },
  wrapper: {},
}));

interface Values {
  email: string,
  password: string,
}

export const Login = () => {
  const classes = useStyles({ theme });
  const { mutateAsync: login } = useLogin();


  const submit = (values: Values) => {
    console.log('OK');
    console.log(values);
    try {
      login(values);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return (
    <div className={classes.page}>
      <PageTitle text={'Sign in'} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={submit}>
            <Form>
              <Input title='Email' name='email' />
              <Input title='Password' name='password' type='password' eye />
              <Button text='Connect' type='submit' />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};