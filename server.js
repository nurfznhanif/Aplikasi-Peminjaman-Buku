const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const serviceAccount = require('./database/aplikasi-perpustakaan.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aplikasi-perpustakaan-81f0b-default-rtdb.asia-southeast1.firebasedatabase.app",
});



app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  try {
    const { name, prodi, email, password, confirmPassword } = req.body;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Password and confirm password do not match' });
    }

    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    // Save additional user information to Firestore
    const userRef = firestore.collection('users').doc(userRecord.uid);
    await userRef.set({
      name,
      prodi,
      email,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Authenticate user using Firebase Authentication
    const userRecord = await admin.auth().getUserByEmail(email);

    // Verify user's password
    await admin.auth().updateUser(userRecord.uid, {
      password: password,
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

app.listen(() => {
  console.log(`Database Berhasil Terhubung`);
});