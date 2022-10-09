import React from 'react';
import {createUseStyles} from "react-jss";
import {Theme, theme} from "../../Theme/Theme";


const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    globalContainer: {
        backgroundColor: theme.colors.pinkMuted,
        width: '100%',
        padding: theme.marginBase * 2,
        outline: 'none',
        border: 'none',
        borderRadius: theme.borderRadius.std
    },
    text: {
        ...theme.fonts.h5,
        color: theme.colors.pinkAccessible
    }
}));


interface Props {
    text: string,
    type?: string
}

export const Button = ({text, type = undefined}: Props) => {
    const classes = useStyles({theme})
    return (
        <button className={classes.globalContainer} type={undefined}>
            <h1 className={classes.text}>{text}</h1>
        </button>
    );
}