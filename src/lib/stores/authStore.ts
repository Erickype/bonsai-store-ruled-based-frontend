import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut, updateEmail,
    updatePassword,

} from "firebase/auth";
import { writable } from 'svelte/store';
import { firebaseAuth, firebaseFunctions } from "$lib/firebase/firebase.client";
import { httpsCallable, httpsCallableFromURL } from "firebase/functions";

interface User {
    email: string
}

interface UserStore {
    isLoading: boolean
    currentUser?: User
}

const info: UserStore = { isLoading: true }

const authUserStore = writable(info);

export { authUserStore };

export const authHandler = {
    makeAdmin: async (email: string) => {
        const addAdminRole = httpsCallable(firebaseFunctions, "addAdminRole")
        await addAdminRole({ email: email })
    },
    login: async (email: string, password: string) => {
        await signInWithEmailAndPassword(firebaseAuth, email, password)
    },
    signUp: async (email: string, password: string) => {
        await createUserWithEmailAndPassword(firebaseAuth, email, password)
    },
    logOut: async () => {
        await signOut(firebaseAuth)
    },
    resetPassword: async (email: string) => {
        await sendPasswordResetEmail(firebaseAuth, email)
    },
    updateEmail: async (email: string) => {
        await updateEmail(firebaseAuth.currentUser!, email)
    },
    updatePassword: async (password: string) => {
        await updatePassword(firebaseAuth.currentUser!, password)
    }
}