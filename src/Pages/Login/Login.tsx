import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from "../../Theme/Theme";
import {PageTitle} from "../Component/PageTitle";
import Input1 from "../Component/Input/Input1/Input1";
import {Form, Formik} from 'formik';
import {Button} from "../Component/Button";


const useStyles = createUseStyles((theme: Theme) => ({
    page: {
        backgroundColor: theme.colors.black,
        height: '100vh',
    },
    container: {
        margin: theme.marginBase * 2,
    }
}));

interface Values {
    email: string,
    password: string,
}

export const Login = () => {
    const classes = useStyles({theme})


    const submit = (values: Values) => {
        console.log("OK")
        console.log(values)
    }

    return (
        <div className={classes.page}>
            <PageTitle text={"Sign in"}/>
            <div className={classes.container}>
                <Formik initialValues={{email: '', password: ''}} onSubmit={submit}>
                    <Form>
                        <Input1 title="Email" name='email'/>
                        <Input1 title="Password" name='password' type='password' eye/>
                        <Button text="Connect" type='submit'/>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}