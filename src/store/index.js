import { createStore } from "vuex"
import { auth } from "../firebase"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log("user state changed:", state.user)
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
                context.commit('setUser', res)
            } else {
                throw new Error('Could not logedin.')
            }
        },
        async logout(context) {
            await signOut(auth)
            context.commit('setUser', null)
        }
    }
})

export default store