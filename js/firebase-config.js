/**
 * Firebase Configuration and Initialization
 *
 * SECURITY: Credentials are loaded from environment configuration
 * See config.local.js.template for setup instructions
 */

import { envConfig } from './env-loader.js';

const firebaseConfig = {
    apiKey: envConfig.get('FIREBASE_API_KEY'),
    authDomain: envConfig.get('FIREBASE_AUTH_DOMAIN'),
    projectId: envConfig.get('FIREBASE_PROJECT_ID'),
    storageBucket: envConfig.get('FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: envConfig.get('FIREBASE_MESSAGING_SENDER_ID'),
    appId: envConfig.get('FIREBASE_APP_ID'),
    measurementId: envConfig.get('FIREBASE_MEASUREMENT_ID')
};

// Initialize Firebase
let db = null;

try {
    if (!envConfig.isConfigured()) {
        throw new Error('Firebase configuration is incomplete. Please set up config.local.js or environment variables.');
    }

    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase:', error);
    console.error('Please check your configuration. See config.local.js.template for instructions.');
}

export { db };
