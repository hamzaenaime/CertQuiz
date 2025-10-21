/**
 * Firebase Configuration and Initialization
 *
 * IMPORTANT: Replace these values with your own Firebase project credentials
 * To get these values:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project or select an existing one
 * 3. Go to Project Settings > General
 * 4. Scroll down to "Your apps" and click "Web app" (</> icon)
 * 5. Copy the configuration object
 */

const firebaseConfig = {
    apiKey: "AIzaSyAW2uOYbgqQ3G_7krgW-PM4nQ8vQfA3l_k",
    authDomain: "certquiz-aada9.firebaseapp.com",
    projectId: "certquiz-aada9",
    storageBucket: "certquiz-aada9.firebasestorage.app",
    messagingSenderId: "212386801853",
    appId: "1:212386801853:web:70081b404d35cd265cafd4",
    measurementId: "G-S1J6NPS95T"
  };

// Initialize Firebase
let db = null;

try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase:', error);
}

export { db };
