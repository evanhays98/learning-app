import React, {useState} from "react";

interface TextArea1Props {
    title: string,
    function: any,
    name: string,
    id: string,
}

const TextArea1 = (props : TextArea1Props) => {


    const handleValue = (test: any) => {
        if (test.value)
            test.classList.add('has-value');
        else
            test.classList.remove('has-value');
    }

    return (
        <div className="textarea1">
            <textarea name={props.name} id={props.id} required onChange={(e) => {
                props.function(e.target.value);
                handleValue(e.target);
            }}/>
            <label>{props.title}</label>
        </div>
    );
};

export default TextArea1;