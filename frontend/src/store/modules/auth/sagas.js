import { takeLatest, call, put, all, take } from 'redux-saga/effects'
import { signInSuccess, signFailure } from './actions'
import history from '../../../services/history'
import api from '../../../services/api'
import { toast } from 'react-toastify'

export function* signIn({ payload }){
    try{
        const { email, password } = payload;
        const response = yield call(api.post,'/sessions', {
            email,
            password
        })
        
        const { token, user } = response.data
        
        api.defaults.headers.Authorization = `Bearer ${token}`
        
        if(user.role === 'admin'){
            yield put(signInSuccess(token, user))
            history.push('/login/adminPanel') 
        }else if(user.role === 'artista'){
            yield put(signInSuccess(token, user))
            history.push('/login/artistPanel') 
        } else{
            toast.error('Sem permissões')
            yield put(signFailure())
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
export function* signOut(){
    history.push('/login')
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp)
])