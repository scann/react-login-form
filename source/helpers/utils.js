// Core
import { object, string, boolean } from 'yup';

export const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

export const schema = object().shape({
    email: string()
        .email()
        .required(),
    password: string().required(),
    remember: boolean(),
});
