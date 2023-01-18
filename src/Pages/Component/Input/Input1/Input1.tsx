import React, {useState} from "react";
import {useFormikContext} from "formik";
import {AiOutlineEye} from "react-icons/ai";
import {createUseStyles} from "react-jss";
import {theme, Theme} from "../../../../Theme/Theme";

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    eyeContainer: {
        padding: theme.marginBase / 2,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: -2,
        marginRight: 10,
    },
    eye: {
        fontSize: theme.icon.normal,
        color: theme.colors.lightGray
    }
}));

interface Input1Props {
    title: string,
    type?: string,
    name: string,
    value?: string
    maxLength?: number
    eye?: boolean
}

const Input1 = ({title, type = "text", name, value, maxLength = 20, eye}: Input1Props) => {

        const [val, setVal] = useState(value || '')
        const formik = useFormikContext<any>();
        const classes = useStyles({theme})
        const [_type, setType] = useState(type)

        const handleValue = (e: any) => {
            setVal(e.value);
            formik.setFieldValue(
                name,
                e.value
            );
            if (e.value)
                e.classList.add('has-value');
            else
                e.classList.remove('has-value');
        }

        return (
            <div className={"input1"}>
                <input className={val ? 'has-value' : ''} type={_type} name={name} maxLength={maxLength} value={val}
                       onChange={(e) => {
                           handleValue(e.target);
                       }}/>
                <label>{title}</label>
                {eye &&
                    <div className={classes.eyeContainer} onClick={() => {
                        _type === 'password' ? setType('text') : setType('password')
                    }}>
                        <AiOutlineEye className={classes.eye}/>
                    </div>
                }
            </div>
        );
    }
;

export default Input1;