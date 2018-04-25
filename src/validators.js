export const required = value => 
    value !== undefined ? undefined : 'This field is required';
export const nonEmpty = value => 
    value.trim() !== '' ? undefined : 'You need to type something';