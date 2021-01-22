import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CheckboxField, InputField } from '../FormFields';
import CustomSelect from "../FormFields/SelectField";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './Registration.scss';

let emailRegEx = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

const validationSchema = yup.object().shape({
    name : yup.string().required('Поле объязательное для заполнения').matches(/^[a-zA-Zа-яА-Я-\s]*$/, {
        message : 'поле “Имя” не может содержать цифры и символы кроме пробела и дефиса'
    }),
    email : yup.string().required('Поле объязательное для заполнения').matches(emailRegEx, {
        message : 'Невалидный адрес почты'
    }),
    phone : yup.string().required('Поле объязательное для заполнения').matches(/^(\+7[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/, {
        message : 'Неверный формат номера'
    }),
    lang : yup.object().shape({
        value : yup.string().required('Нужно выбрать один из пунктов')
    }),
    agreement : yup.bool().oneOf([ true ], 'Надо согласится на обработку персональных данных'),
})

let options = [
    { value : 'ru', label : 'Русский' },
    { value : 'en', label : 'Английский' },
    { value : 'ch', label : 'Китайский' },
    { value : 'es', label : 'Испанский' },
]

const Registration = () => {
    const { register, handleSubmit, errors, formState, control } = useForm({
        mode : 'onChange',
        resolver : yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2))
    }

    return (
        <div className="registration">
            <div className="registration__head">
                <h1 className="registration__title">Регистрация</h1>
                <div className="registration__subtitle">
                    Уже есть аккаунт? <Link to="/">Войти</Link>
                </div>
            </div>
            <form className="registration__body" onSubmit={ handleSubmit(onSubmit) }>
                <InputField
                    formClass='registration'
                    label='Имя'
                    register={ register }
                    name='name'
                    errors={ errors }
                    type="text"
                    placeholder="Введите Ваше имя"
                />
                <InputField
                    formClass='registration'
                    label='Еmail'
                    register={ register }
                    name='email'
                    errors={ errors }
                    type="email"
                    placeholder="Введите ваш email"
                />
                <InputField
                    formClass='registration'
                    label='Номер телефона'
                    register={ register }
                    name='phone'
                    errors={ errors }
                    type="tel"
                    placeholder="Введите номер телефона"
                />
                <CustomSelect
                    formClass='registration'
                    control={ control }
                    options={ options }
                    placeholder="Язык"
                    errors={ errors }
                    name="lang"
                />
                <CheckboxField
                    formClass="registration"
                    register={ register }
                    name="agreement"
                    errors={ errors }
                />
                <label className="registration__row">
                    <input className="button" type="submit"
                           value="Зарегистрироваться"
                           disabled={ !formState.isValid }
                    />
                </label>
            </form>
        </div>
    );
};

export default Registration;
