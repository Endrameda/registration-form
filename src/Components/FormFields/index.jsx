import React from 'react';
import { Link } from 'react-router-dom';
import './FormFields.scss';

export function InputField ({ formClass, label, register, name, errors, ...rest }) {
    return (
        <label className={ `${ formClass }__row input-field field field--input` }>
            <span className={ `${ formClass }__field-title field__title` }>{ label }</span>
            <input
                className={ `${ formClass }__field field__input` }
                name={ name }
                ref={ register }
                { ...rest }
            />
            { errors[name] &&
            <span className={ `${ formClass }__error field__error` }>{ errors[name]?.message }</span> }
        </label>
    )
}

export function CheckboxField ({ formClass, register, name, errors }) {
    return (
        <label className={ `${ formClass }__row checkbox-field` }>
            <span className="checkbox-field__checkbox-wrap">
                <input className="checkbox-field__checkbox checkbox-field__checkbox--hide" type="checkbox"
                       ref={ register } name={ name }/>
                <span className="checkbox-field__checkbox"/>
                <span className="checkbox-field__text">
                    Принимаю <Link to='/'>условия</Link> использования
                </span>
            </span>
            { errors[name] && <span className="checkbox-field__error field__error">{ errors[name]?.message }</span> }
        </label>
    )
}