import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from "../../Theme/Theme";
import {PageTitle} from "../Component/PageTitle";
import Input1 from "../Component/Input/Input1/Input1";
import {Form, Formik} from 'formik';
import {Button} from "../Component/Button";
import {useSignUp} from "../../libs/api/src";

const useStyles = createUseStyles((theme: Theme) => ({
    page: {
        backgroundColor: theme.colors.deepBrown,
        height: '100vh',
    },
    container: {
        margin: theme.marginBase * 2,
    }
}));

interface Values {
    mail: string,
    password: string,
    confirmPassword: string,
    pseudo: string,
}

const initialValues = {
    mail: '',
    password: '',
    confirmPassword: '',
    pseudo: ''
}

export const Register = () => {
    const classes = useStyles({theme})
    const {mutateAsync: signup} = useSignUp()

    const submit = async (values: Values) => {
        try {
            const test = await signup({mail: values.mail, pseudo: values.pseudo, password: values.password})
            console.log(test)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={classes.page}>
            <PageTitle text={"Sign up"}/>
            <div className={classes.container}>
                <Formik initialValues={initialValues} onSubmit={submit}>
                    <Form>
                        <Input1 title="Email" name='mail'/>
                        <Input1 title="Pseudo" name='pseudo'/>
                        <Input1 title="Password" name='password' type='password' eye/>
                        <Input1 title="Confirm Password" name='confirmPassword' type='password' eye/>
                        <Button text="Join" type='submit'/>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}