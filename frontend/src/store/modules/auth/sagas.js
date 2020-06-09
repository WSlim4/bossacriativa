import { takeLatest, call, put, all } from 'redux-saga/effects'
import { signInSuccess, signFailure } from './actions'
import history from '../../../services/history'
import api from '../../../services/api'
import { toast } from 'react-toastify'

export function* signIn({ payload }){
    try{
        const { email, password } = payload;
        const response = yield call(api.post, '/sessions', {
        email,
        password
        })
        const { token, user } = response.data

        if(user.role !== 'admin'){
            toast.error('Usuário não é admin')
            return
        } else{
            api.defaults.headers.Authorization = `Bearer ${token}`
        
            yield put(signInSuccess(token, user))
            history.push('/admin/adminPanel')
        }    

    } catch(err){
        toast.error('Falha na autenticação')
        yield put(signFailure())
    }
}
export function* signUp({ payload }){
    try{
        const { username, email, password, role } = payload
        
        yield call(api.post, '/users', {
            username,
            email,
            password,
            role
        })
        toast.success('Usuário cadastrado')

    }catch(err){
        toast.error('Falha no cadastro, verifique os dados')
        
        yield put(signFailure())
    }

}
export function setToken({ payload }){
    if(!payload) return;

    const { token } = payload.auth.token

    if(token){
        return api.defaults.headers.Authorization = `Bearer ${token}`
    }
}
export function signOut(){
    localStorage.clear()
    history.push('/')
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp)
])