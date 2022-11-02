import { required, email, max } from 'vee-validate/dist/rules';
import { extend, setInteractionMode } from 'vee-validate';

setInteractionMode('eager')

extend('required', {
    ...required,
    message: '{_field_} is required',
})

extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
    ...email,
    message: '{_field_} is not valid',
})