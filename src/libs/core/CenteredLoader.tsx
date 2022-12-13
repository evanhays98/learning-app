import React from 'react';
import {createUseStyles} from "react-jss";
import {Theme, theme} from "../../Theme/Theme";
import {CircularProgress} from '@mui/material';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    globalContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
}));

export const CenteredLoader = () => {
    const classes = useStyles({theme})
    return (
        <div className={classes.globalContainer}>
            <CircularProgress/>
        </div>
    );
}
