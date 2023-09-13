import { auth } from "$lib/firebase/firebase.client";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateEmail, updatePassword } from "firebase/auth";
import { writable } from "svelte/store";

export const authStore = writable({
    isLoading: true,
    currentUser: null
})

export const authHandler = {
    signUp: async (email: string, password :string) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    logOut: async ()=>{
        await signOut(auth)
    },
    resetPassword: async(email: string)=>{
        await sendPasswordResetEmail(auth, email)
    },
    updateEmail: async(email: string)=>{
        await updateEmail(auth.currentUser!, email)
    }
}