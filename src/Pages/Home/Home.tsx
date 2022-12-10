import React from 'react';
import {createUseStyles} from "react-jss";
import {NavBar} from "../Component/NavBar/NavBar";
import {Theme, theme} from "../../Theme/Theme";
import {PageTitle} from "../Component/PageTitle";
import {useMe} from "../../libs/api/src";

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    globalContainer: {},
}));

export const Home = () => {
    const classes = useStyles({theme})
    const {data: me} = useMe()
    console.log(me)
    return (
        <NavBar>
            <div className={classes.globalContainer}>
                <PageTitle text={"Home"}/>
            </div>
        </NavBar>
    );
}
