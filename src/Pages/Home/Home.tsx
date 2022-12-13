import React from 'react';
import {createUseStyles} from "react-jss";
import {NavBar} from "../Component/NavBar/NavBar";
import {Theme, theme} from "../../Theme/Theme";
import {PageTitle} from "../Component/PageTitle";
import {useMe} from "../../libs/api/src";
import {CenteredLoader} from "../../libs/core/CenteredLoader";
import {Navigate} from 'react-router-dom';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    globalContainer: {},
}));

export const Home = () => {
    const classes = useStyles({theme})
    const {data: me, isLoading} = useMe()
    if (isLoading) {
        return <CenteredLoader/>
    }
    if (!me) {
        return <Navigate to="/login"/>
    }
    return (
        <NavBar>
            <div className={classes.globalContainer}>
                <PageTitle text={"Home"}/>
            </div>
        </NavBar>
    );
}
