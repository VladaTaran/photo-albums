import { createTypes, async } from 'redux-action-types';

export const types = createTypes(
    'users/',
    async('FETCH')
)