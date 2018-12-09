/* eslint-disable */
import methods from '../plugins/axios';

const Logout = () => {
    return methods.get('/logout');
};

// 暂时没想好
const UploadPicture = () => {
    return methods
}

export {
    Logout,
    UploadPicture,
}

