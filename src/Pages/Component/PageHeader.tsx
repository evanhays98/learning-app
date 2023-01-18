import {createUseStyles} from "react-jss";
import {theme, Theme} from "../../Theme/Theme";
import React from "react";
import {Button} from "./Buttons/Button";
import {Icon} from "./Icons";

const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        ...theme.basicFlex,
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        padding: theme.marginBase * 2,
        backgroundColor: `${theme.colors.black}40`, /* Dark background */
        boxShadow: `0 0 20px ${theme.colors.black}50`,
        backdropFilter: 'blur(10px)',
    },
    title: {
        flex: 1,
        ...theme.fonts.h4,
    }
}));

interface Props {
    children?: React.ReactNode,
    title?: string,
}

export const PageHeader = ({title}: Props) => {
    const classes = useStyles({theme})

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>{title && title}</h1>
            <Button bgColor="lightOrange" color="darkGray" square icon={Icon.close}
                    sizeIcon={theme.marginBase * 5}/>
        </div>);
}