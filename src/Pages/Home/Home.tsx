import React from 'react';
import {createUseStyles} from "react-jss";
import {NavBar} from "../Component/NavBar/NavBar";
import {Theme, theme} from "../../Theme/Theme";
import {PageTitle} from "../Component/PageTitle";

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    globalContainer: {},
}));

export const Home = () => {
    const classes = useStyles({theme})
    return (
        <NavBar>
            <div className={classes.globalContainer}>
                <PageTitle text={"Home"}/>
            </div>
        </NavBar>
    );
}
