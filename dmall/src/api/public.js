import methods from '../plugins/axios';

/**
 * {
    "code": 0,
    "msg": "success",
    "data": ""
}
 */
export const LogOut = methods.get('/logout');
