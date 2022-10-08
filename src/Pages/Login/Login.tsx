import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from "../../Theme/Theme";
import {NavBar} from "../Component/NavBar/NavBar";

const useStyles = createUseStyles((theme: Theme) => ({
    page: {
        backgroundColor: theme.colors.black,
    },
}));


export const Login = () => {
    const classes = useStyles({theme})
    return (
        <NavBar>
            <div className={classes.page}>
            </div>
        </NavBar>
    );
}