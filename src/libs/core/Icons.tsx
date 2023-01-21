import React from 'react';
import { createUseStyles } from 'react-jss';
import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { Colors, ColorsTest, Theme, theme } from '../theme/Theme';
import { BsCheck } from 'react-icons/bs';

const useStyles = createUseStyles<string, { size: number, color: Colors }, any>((theme: Theme) => ({
  container: {
    ...theme.basicFlex,
    padding: theme.marginBase / 2,
    borderRadius: theme.borderRadius.std,
  },
  active: {
    background: theme.colors.darkOrange,
  },
  icon: props => ({
    fontSize: props.size,
    color: theme.colors[props.color],
    fontWeight: 700,
  }),
}));

export enum Icon {
  home,
  work,
  profile,
  close,
  check
}

interface Props {
  icon: Icon,
  size?: number,
  color?: Colors,
}

export const Icons = ({ icon, size, color }: Props) => {
  const classes = useStyles({ size: size || theme.icon.large, color: color || ColorsTest.lightGray, theme });
  return (
    <>
      {icon === Icon.home && <AiOutlineHome className={classes.icon} />}
      {icon === Icon.work && <MdWorkOutline className={classes.icon} />}
      {icon === Icon.profile && <RiUser3Line className={classes.icon} />}
      {icon === Icon.close && <IoMdClose className={classes.icon} />}
      {icon === Icon.check && <BsCheck className={classes.icon} />}
    </>
  );
};