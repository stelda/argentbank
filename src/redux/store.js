import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

/**
 * Configure le store Redux avec l'état de l'authentification.
 *
 * @returns {Object} - Le store Redux configuré.
 */
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;