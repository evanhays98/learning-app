import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from '../../libs/theme/Theme';
import { PageTitle } from '../../libs/core/PageTitle';
import Input from '../../libs/core/Input/Input';
import { Form, Formik } from 'formik';
import { Button } from '../../libs/core/Buttons/Button';

const useStyles = createUseStyles((theme: Theme) => ({
  page: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: theme.marginBase * 6,
    flexDirection: 'column',
    padding: theme.marginBase,
    paddingBottom: theme.marginBase * 6,
  },
  container: {
    ...theme.basicFlex,
    gap: theme.marginBase * 3,
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
    console.log(values);
  };

  return (
    <div className={classes.page}>
      <PageTitle text={'Sign up'} />

      <Formik initialValues={{ email: '', password: '', confirmPassword: '' }} onSubmit={submit}>
        <Form>
          <div className={classes.container}>
            <Input title='Email' name='email' />
            <Input title='Password' name='password' type='password' eye />
            <Input title='Confirm Password' name='confirmPassword' type='password' eye />
            <Button text='Join' type='submit' full />
          </div>
        </Form>
      </Formik>

    </div>
  );
};