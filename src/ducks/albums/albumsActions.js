import { createTypes, async } from 'redux-action-types';

export const types = createTypes(
    'albums/',
    async('FETCH'),
    async('GET_PHOTOS')
)