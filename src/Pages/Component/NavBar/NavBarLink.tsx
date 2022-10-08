import React from 'react';
import {createUseStyles} from "react-jss";
import {theme, Theme} from '../../../Theme/Theme'
import {AiOutlineHome} from "react-icons/ai";
import {MdWorkOutline} from "react-icons/md";
import {RiUser3Line} from "react-icons/ri";
import {NavLink} from "react-router-dom";
import classnames from 'classnames'

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    container: {
        ...theme.basicFlex,
        padding: theme.marginBase / 2,
        borderRadius: theme.borderRadius.std
    },
    active: {
        background: theme.colors.red,
    },
    icon: {
        fontSize: theme.icon.large,
        color: theme.colors.white
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
            {icon === Icon.home && <AiOutlineHome className={classes.icon}/>}
            {icon === Icon.work && <MdWorkOutline className={classes.icon}/>}
            {icon === Icon.profile && <RiUser3Line className={classes.icon}/>}
        </NavLink>
    );
}