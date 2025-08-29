import './envloader.js'

import express from 'express';
import cors from 'cors';

import { signup, signin } from './auth.js';
import { setProfile, updateProfile, getUserData, getAllUsers, newsSubscribe, contactUs } from './db.js';


const app = express()

const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Clean Foundation NGO API!')
})

// API to signup a new user
app.post('/api/signup', async (req, res) => {

    console.log(req.body);

    const { email, password, ...userData } = req.body;

    console.log(userData);

    const resp = await signup(email, password);

    if ( resp.uid ) {

        if ( Object.keys(userData).length === 0 ) {
            console.log("No user data to update.");
        }
        else{
            setProfile(resp.email, userData)
        } 

        res.status(200).json({uid: resp.uid, email: resp.email});

    } else if ( resp === 400 ) {
        res.status(400).send('Email already in use');
    } else {
        res.status(500).send('Internal Server Error');
    }
})


// API to sign in an existing user
app.post('/api/signin', async (req, res) => {

    const { email, password } = req.body;
    const status = await signin(email, password);

    if ( status === 200 ) {
        res.sendStatus(200);
    } else if ( status === 400 ) {
        res.status(400).send('Invalid credentials');
    } else {
        res.status(500).send('Internal Server Error');
    }

})


// API to update user profile
app.post('/api/update', async (req, res) => {

    const { email, ...data } = req.body;
    
    const status = await updateProfile(email, data);

    console.log(status);

    if ( status === 200 ) {
        res.status(200).send('Profile updated successfully');
    } else if ( status === 400 ) {
        res.status(400).send('Invalid credentials');
    } else {
        res.status(500).send('Internal Server Error');
    }

})


// API to get user data by email
app.get('/api/getUser', async (req, res) => {

    const { email } = req.query;

    if (!email) {
        return res.status(400).send('email is required');
    }

    const data = await getUserData(email);

    console.log(data);

    if ( data === null ) {
        return res.status(404).send('User not found');
    }

    res.status(200).json(data)

})


// API to get all users
app.get('/api/getAllUsers', async (req, res) => {
    const users = await getAllUsers();
    return res.status(200).json(users);
})


// API to subscribe to newsletter
app.get('/api/subscribe', (req, res) => {
    newsSubscribe(req.query.email);
    res.sendStatus(200);
})


// API to for "contact us" section
app.post('/api/contact', (req, res) => {
    contactUs(req.body);
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


