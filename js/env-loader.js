/**
 * Environment Configuration Loader
 *
 * This file loads environment variables for the application.
 * For development with a local web server that supports .env files, variables
 * will be loaded from the .env file.
 *
 * For static file hosting (GitHub Pages, etc.), you'll need to:
 * 1. Create a config.local.js file (git-ignored) with your credentials
 * 2. Or set up environment variables in your hosting provider
 */

class EnvConfig {
    constructor() {
        this.config = {};
        this.loadConfig();
    }

    loadConfig() {
        // Try to load from window._env_ (can be set by build process or hosting provider)
        if (typeof window !== 'undefined' && window._env_) {
            this.config = { ...window._env_ };
            return;
        }

        // For local development, check if config.local.js was loaded
        // This file should be created manually and is git-ignored
        if (typeof window !== 'undefined' && window.LOCAL_CONFIG) {
            this.config = { ...window.LOCAL_CONFIG };
            return;
        }

        // Fallback: environment variables might be injected at build time
        this.config = {
            FIREBASE_API_KEY: this.getEnvVar('FIREBASE_API_KEY'),
            FIREBASE_AUTH_DOMAIN: this.getEnvVar('FIREBASE_AUTH_DOMAIN'),
            FIREBASE_PROJECT_ID: this.getEnvVar('FIREBASE_PROJECT_ID'),
            FIREBASE_STORAGE_BUCKET: this.getEnvVar('FIREBASE_STORAGE_BUCKET'),
            FIREBASE_MESSAGING_SENDER_ID: this.getEnvVar('FIREBASE_MESSAGING_SENDER_ID'),
            FIREBASE_APP_ID: this.getEnvVar('FIREBASE_APP_ID'),
            FIREBASE_MEASUREMENT_ID: this.getEnvVar('FIREBASE_MEASUREMENT_ID'),
            ADMIN_USERNAME: this.getEnvVar('ADMIN_USERNAME'),
            ADMIN_PASSWORD: this.getEnvVar('ADMIN_PASSWORD')
        };
    }

    getEnvVar(key) {
        // Try multiple sources for environment variables
        if (typeof process !== 'undefined' && process.env && process.env[key]) {
            return process.env[key];
        }
        if (typeof window !== 'undefined' && window[key]) {
            return window[key];
        }
        return undefined;
    }

    get(key) {
        const value = this.config[key];
        if (!value || value === 'undefined' || value === 'your_' + key.toLowerCase() + '_here') {
            console.error(`Configuration error: ${key} is not set or is using a placeholder value.`);
            console.error('Please create a config.local.js file or set environment variables.');
            return null;
        }
        return value;
    }

    isConfigured() {
        const requiredKeys = [
            'FIREBASE_API_KEY',
            'FIREBASE_AUTH_DOMAIN',
            'FIREBASE_PROJECT_ID'
        ];

        for (const key of requiredKeys) {
            if (!this.get(key)) {
                return false;
            }
        }
        return true;
    }
}

// Create global instance
const envConfig = new EnvConfig();

export { envConfig };
