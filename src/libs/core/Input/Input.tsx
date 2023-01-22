import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from 'src/libs/theme';
import classnames from 'classnames';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginTop: theme.marginBase * 2,
    ...theme.basicFlex,
    transition: 'all ease-in-out 0.3s',
    borderLeft: ` solid 2px ${theme.colors.transparentDarkGray}`,
    borderRight: ` solid 2px ${theme.colors.transparentDarkGray}`,
    borderRadius: theme.borderRadius.std,
    borderBottom: `2px solid ${theme.colors.lightGray}50`,
    '&:focus-within': {
      borderBottom: `2px solid ${theme.colors.lightGray}`,
    },
  },
  eyeContainer: {
    padding: theme.marginBase / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 6,
    marginRight: 10,
  },
  eye: {
    fontSize: theme.icon.normal,
    color: theme.colors.lightGray,
  },
  input: {
    resize: 'none',
    outline: 'none',
    borderRadius: [theme.borderRadius.std, theme.borderRadius.std, 0, 0],
    backgroundColor: 'transparent',
    flex: 1,
    margin: 'auto',
    ...theme.fonts.label,
    padding: theme.marginBase,
    border: 'none',
    '&:focus + label': {
      top: -theme.marginBase * 3,
      left: 0,
      fontWeight: 700,
      color: theme.colors.orange,
      transition: 'all ease-in-out 0.2s',
      paddingLeft: '1%',
    },

  },
  label: {
    position: 'absolute',
    left: '2%',
    ...theme.fonts.label,
    marginLeft: 0,
    top: 9,
    paddingLeft: theme.marginBase / 2,
    transition: 'all ease-in-out 0.2s',
    pointerEvents: 'none',
  },
  hasValue: {
    fontWeight: 700,
    color: theme.colors.orange,
    top: -theme.marginBase * 3,
    left: 0,
    transition: 'all ease-in-out 0.2s',
    paddingLeft: '1%',
  },

}));

interface Input1Props {
  title: string,
  type?: string,
  name: string,
  value?: string
  maxLength?: number
  eye?: boolean
}

export const Input = ({ title, type = 'text', name, value, maxLength = 100, eye }: Input1Props) => {

    const [val, setVal] = useState(value || '');
    const formik = useFormikContext<any>();
    const classes = useStyles({ theme });
    const [_type, setType] = useState(type);

    const handleValue = (e: any) => {
      setVal(e.value);
      formik.setFieldValue(
        name,
        e.value,
      );
      if (e.value)
        e.classList.add('has-value');
      else
        e.classList.remove('has-value');
    };

    return (
      <div className={classes.inputContainer}>
        <input className={classnames(classes.input)} type={_type} name={name} maxLength={maxLength}
               value={val}
               onChange={(e) => {
                 handleValue(e.target);
               }} />
        <label className={classnames(classes.label, {
          [classes.hasValue]: val,
        })}>{title}</label>
        {eye &&
          <div className={classes.eyeContainer} onClick={() => {
            _type === 'password' ? setType('text') : setType('password');
          }}>
            <AiOutlineEye className={classes.eye} />
          </div>
        }
      </div>
    );
  }
;

export default Input;