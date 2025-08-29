import app from './firebaseConfig.js'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app);

export async function signup(mail, password){
    try{

        const resp = await createUserWithEmailAndPassword(auth, mail, password)

        const user = resp.user;
    
        console.log('User signed up');
        // console.log(user);

        return user;
    }

    catch(error){

        console.log(error.code);

        if ( error.code === 'auth/email-already-in-use' ) {
            console.log('Email already in use');
            return 400;
        }

        // console.error('Error signing in:', error);
        return 500;
    }
}


export async function signin(mail, password){
    try{

        const resp = await signInWithEmailAndPassword(auth, mail, password)

        console.log('User signed in');

        return 200;
    }

    catch(error){
        console.log(error.code);

        if ( error.code === 'auth/invalid-credential' ) {
            console.log('Invalid credentials');
            return 400;

        }

        console.error('Error signing in:', error);
        return 500;
    }
}
