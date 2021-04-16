import {useContext, memo } from 'react';
import { FormContext } from './FormContext';

export default function FormInput(props) {
    const formValues = useContext(FormContext);
    const input = formValues[props.label];
    return <PureFormInputInner label={props.label} {...input} />
}

function FormInputInner({label, value, onChange}) {
    console.log(`Input ${label} is rendered`);
    return <>
        <label>{label}:
            <input value={value} onChange={event => onChange(event.target.value.replace(/[а-я]/gi,""))}/>
        </label><br />
    </>
}

const PureFormInputInner = memo(FormInputInner);
