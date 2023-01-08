import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from "../../Theme/Theme";
import {PageTitle} from "../Component/PageTitle";
import Input1 from "../Component/Input/Input1/Input1";
import {Form, Formik} from 'formik';
import {Button} from "../Component/Button";
import {LoginUserDto, useLogin} from "../../libs/api/src";


const useStyles = createUseStyles((theme: Theme) => ({
    page: {
        height: '100vh',
        maxWidth: theme.marginBase * 80,
        margin: '0 auto'
    },
    container: {
        margin: theme.marginBase * 2,
    },
    wrapper: {}
}));

export const Login = () => {
    const classes = useStyles({theme})
    const {mutateAsync: login} = useLogin()


    const submit = async (values: LoginUserDto) => {
        try {
            await login(values)
        } catch (e) {
            throw e
        }
    }

    return (
        <div className={classes.page}>
            <PageTitle text={"Sign in"}/>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <Formik initialValues={{mail: '', password: ''}} onSubmit={submit}>
                        <Form>
                            <Input1 title="Email" name='mail'/>
                            <Input1 title="Password" name='password' type='password' eye/>
                            <Button text="Connect" type='submit'/>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}