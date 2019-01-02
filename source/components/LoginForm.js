// Core
import React, { Component } from 'react';
import { Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

export class LoginForm extends Component {
    render() {
        const { touched, isSubmitting, errors, values } = this.props;

        const invalidEmailStyle = cx({
            [ Styles.invalidInput ]: touched.email && errors.email,
        });

        const invalidPasswordStyle = cx({
            [ Styles.invalidInput ]: touched.password && errors.password,
        });

        const disabledButtonStyle = cx({
            [ Styles.disabledButton ]: isSubmitting,
        })

        const submittingMessage = isSubmitting ? 'Вход...' : 'Войти';

        return (
            <Form>
                <Field
                    className = { invalidEmailStyle }
                    name = 'email'
                    placeholder = 'Почта'
                    type = 'email'
                />
                <Field
                    className = { invalidPasswordStyle }
                    name = 'password'
                    placeholder = 'Пароль'
                    type = 'password'
                />
                <label>
                    <Field
                        checked = { values.remember }
                        name = 'remember'
                        type = 'checkbox'
                    />
                    <span>Запомнить меня</span>
                </label>
                <button
                    className = { disabledButtonStyle }
                    disabled = { isSubmitting }
                    type = 'submit'>
                    { submittingMessage }
                </button>
            </Form>
        );
    }
}
