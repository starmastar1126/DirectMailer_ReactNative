import types from './types';

export const rememberAccount = account => {
    return {
        type: types.REMEMBER_ACCOUNT,
        payload: account
    }
}

export const clearAccount = () => {
    return {
        type: types.CLEAR_ACCOUNT,
    }
}

// const actions = {
//     rememberAccount,
//     clearAccount,
// }

// export default actions;
