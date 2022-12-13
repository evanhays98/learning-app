import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from '../../../Theme/Theme'
import {Icon, NavBarLink} from "./NavBarLink";

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    page: {
        backgroundColor: theme.colors.black,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column-reverse',
        position: 'relative',
    },
    navBar: {
        width: "100%",
        padding: [theme.marginBase * 2, theme.marginBase * 3],
        ...theme.basicFlex,
        justifyContent: 'space-evenly',
        borderTop: '5px solid',
        borderColor: theme.colors.pink,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    lineBar:{
        width: "100%",
        background: theme.colors.rg,
        height: theme.marginBase / 2,
    },
    pageContainer: {
      width: '100%',
      height: '100%',
      overflow: 'auto',
    }
}));

interface Props {
    children?: React.ReactNode
}

export const NavBar = ({children}: Props) => {
    const classes = useStyles({theme})
    return (
        <div className={classes.page}>
            <div className={classes.navBar}>
                <NavBarLink icon={Icon.home} to="/home" />
                <NavBarLink icon={Icon.work} to="/work" />
                <NavBarLink icon={Icon.profile} to="/profile" />
            </div>
            <div className={classes.pageContainer}>
                {children}
            </div>
        </div>
    );
}