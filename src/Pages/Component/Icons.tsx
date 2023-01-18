import React from 'react';
import {createUseStyles} from "react-jss";
import {AiOutlineHome} from "react-icons/ai";
import {MdWorkOutline} from "react-icons/md";
import {RiUser3Line} from "react-icons/ri";
import {IoMdClose} from "react-icons/io";
import {Theme, theme} from "../../Theme/Theme";

const useStyles = createUseStyles<string, { size: number }, any>((theme: Theme) => ({
    container: {
        ...theme.basicFlex,
        padding: theme.marginBase / 2,
        borderRadius: theme.borderRadius.std
    },
    active: {
        background: theme.colors.darkOrange,
    },
    icon: props => ({
        fontSize: props.size,
        color: theme.colors.lightGray,
        fontWeight: 700
    })
}));

export enum Icon {
    home,
    work,
    profile,
    close,
}

interface Props {
    icon: Icon,
    size?: number,
}

export const Icons = ({icon, size}: Props) => {
    const classes = useStyles({size: size || theme.icon.large, theme})
    return (
        <>
            {icon === Icon.home && <AiOutlineHome className={classes.icon}/>}
            {icon === Icon.work && <MdWorkOutline className={classes.icon}/>}
            {icon === Icon.profile && <RiUser3Line className={classes.icon}/>}
            {icon === Icon.close && <IoMdClose className={classes.icon}/>}
        </>
    );
}