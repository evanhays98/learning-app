import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from '../../../Theme/Theme'
import {NavLink} from "react-router-dom";
import classnames from 'classnames'
import {BsFillBriefcaseFill, BsViewList} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    container: {
        ...theme.basicFlex,
        padding: theme.marginBase,
        borderRadius: theme.borderRadius.std / 2
    },
    active: {
        background: theme.colors.orangePeel,
    },
    icon: {
        fontSize: theme.icon.large,
        color: theme.colors.darkSlateGray
    }
}));

export enum Icon {
    home,
    work,
    profile,
}

interface Props {
    icon: Icon,
    to: string,
}


export const NavBarLink = ({icon, to}: Props) => {
    const classes = useStyles({theme})
    return (
        <NavLink to={to} className={({isActive}) => classnames(classes.container, {[classes.active]: isActive})}>
            {icon === Icon.home && <BsViewList className={classes.icon}/>}
            {icon === Icon.work && <BsFillBriefcaseFill className={classes.icon}/>}
            {icon === Icon.profile && <FaUserAlt className={classes.icon}/>}
        </NavLink>
    );
}