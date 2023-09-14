import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut, updateEmail,
    updatePassword
} from "firebase/auth";
import { writable } from 'svelte/store';
import { firebaseAuth } from "$lib/firebase/firebase.client";

const authUserStore = writable({
    isLoading: true,
    currentUser: null
});

export { authUserStore };

export const authHandler = {
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