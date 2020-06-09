import produce from 'immer'

const INITIAL_STATE = {
    token: null,
    role: null,
    loading: false
}

export default function auth(state= INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case '@auth/SIGN_IN_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@auth/SIGN_IN_SUCCESS': {
                draft.token = action.payload.token;
                draft.role = action.payload.user.role;
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_FAILURE': {
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.token = null;
                draft.role = null;
                break;
            }
            default:
                return state
        }
    })

}