import classnames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Colors, theme, Theme } from '../../theme/Theme';
import { Link } from 'react-router-dom';
import { Icon, Icons } from '../Icons';

const useStyles = createUseStyles<string, { line: boolean, bgColor: Colors, color: Colors }, any>((theme: Theme) => ({
  blockColor: props => ({
    background: theme.colors[props.bgColor],
    minWidth: !props.line && theme.marginBase * 10,
    borderRadius: theme.borderRadius.std,
    ...theme.fonts.label,
    color: theme.colors[props.color],
    fontWeight: 'bold',
    display: 'flex',
    border: 0,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: !props.line ? theme.marginBase / 2 : [theme.marginBase / 4, theme.marginBase],
    gap: !props.line ? theme.marginBase * 2 : theme.marginBase,
  }),
  full: {
    width: '100%',
  },
  square: {
    width: theme.marginBase * 5,
    height: theme.marginBase * 5,
    minWidth: '0px !important',
  },
}));


interface Values {
  className?: string;
  bgColor?: Colors;
  color?: Colors;
  iconColor?: Colors;
  text?: string;
  children?: React.ReactNode;
  full?: boolean;
  to?: string;
  icon?: Icon;
  line?: boolean;
  square?: boolean;
  sizeIcon?: number;
}


export const Button = ({
                         className,
                         square,
                         bgColor = 'brown',
                         color = 'lightGray',
                         children,
                         text,
                         full,
                         to,
                         icon,
                         line,
                         iconColor,
                         sizeIcon = theme.marginBase * 2,
                         ...rest
                       }: Values & any) => {
  const classes = useStyles({ line: line || false, theme, bgColor: bgColor, color: color });

  if (to) {
    return (
      <Link to={to} className={classnames(classes.blockColor, {
        [classes.full]: full,
        [classes.line]: line,
        [classes.square]: square,
      }, className)} {...rest}>
        {children}
        {text && text}
        {icon && <Icons icon={icon} size={16} />}
      </Link>
    );
  } else {
    return (
      <button className={classnames(classes.blockColor, {
        [classes.full]: full,
        [classes.line]: line,
        [classes.square]: square,
      }, className)} {...rest}>
        {children}
        {text && text}
        {icon && <Icons icon={icon} size={sizeIcon} color={iconColor} />}
      </button>
    );
  }
};