import { getAuth } from "firebase/auth"

export function isLoggedIn () {
    const auth = getAuth()
    const user = auth.currentUser

    return user ? true : false
}