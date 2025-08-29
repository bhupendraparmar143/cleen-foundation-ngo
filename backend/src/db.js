import { getFirestore, collection, doc, getDoc, setDoc, updateDoc, getDocs } from 'firebase/firestore';

import app from './firebaseConfig.js';

const db = getFirestore(app);

export async function setProfile(email, userData) {

    console.log("email:", email, "Data:", userData);

    const docRef = doc(db, 'users', email)

    await setDoc(docRef, {
        ...userData
    }, { merge: true });

    console.log("Created document with email: ", email, "Data:", userData);
}

export async function updateProfile(email, userData) {

    try {

        console.log("email:", email, "Data:", userData);

        const docRef = doc(db, 'users', email)

        await updateDoc(docRef, {
            ...userData
        }, { merge: true });

        console.log("Updated document with email: ", email, "Data:", userData);

        return 200;
    }
    catch (error) {
        console.error("Error updating document: ", error);
        return 500;
    }
}

export async function getUserData(email) {

    console.log("Retrieving data for email:", email);

    const ref = doc(db, 'users', email);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }

}

export async function getAllUsers() {

    const querySnapshot = await getDocs(collection(db, "users"));

    const users = {}

    querySnapshot.forEach((doc) => {
        users[doc.id] = doc.data();
    });

    return users;

}

export async function newsSubscribe(email){

    const docRef = doc(db, "newsletter", email);

    await setDoc(docRef, {})

}

export async function contactUs(data) {
    const docRef = doc(db, "contact", data.email);

    await setDoc(docRef, {
        ...data
    }, { merge: true });

    console.log("Contact request received from:", data.email);
}