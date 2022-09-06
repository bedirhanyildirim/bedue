import { createStore } from "vuex"
import { auth } from "../firebase"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    getAuth
} from "firebase/auth"

const store = createStore({
    state: {
        // user: getAuth()
        user: '' || JSON.parse(localStorage.getItem('__user'))
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    getters: {
        isLogedIn(state) {
            if (state.user) {
                return true
            }
            return false
        }
    },
    actions: {
        async signup(context, payload) {
            const res = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
            if (res) {
                context.commit('setUser', res)
            } else {
                throw new Error('Could not complete signup.')
            }
        },
        async login(context, payload) {
            const res = await signInWithEmailAndPassword(auth, payload.email, payload.password)
            if (res) {
                context.commit('setUser', res.user)
                console.log(res.user)
                localStorage.setItem('__user', JSON.stringify(res.user))
            } else {
                throw new Error('Could not logedin.')
            }
        },
        async logout(context) {
            await signOut(auth)
            localStorage.removeItem('__user')
            context.commit('setUser', null)
        }
    }
})

export default store