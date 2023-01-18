import React from 'react';
import {createUseStyles} from "react-jss";
import {Theme, theme} from "../../Theme/Theme";


const useStyles = createUseStyles((theme: Theme) => ({
    pageBackground: {
        position: "absolute",
        background: theme.colors.darkGradient,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
}));


interface Props {
}

export const PageBackground = ({}: Props) => {
    const classes = useStyles({theme})
    return (
        <div className={classes.pageBackground}/>
    );
}