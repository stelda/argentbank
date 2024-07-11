import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

/**
 * Une fonction asynchrone qui gère la requête de connexion de l'utilisateur.
 */
const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data.body;
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
});

/**
 * Une fonction asynchrone qui gère la requête pour obtenir le profil de l'utilisateur.
 */
const getUserProfile = createAsyncThunk('auth/getUserProfile', async (token, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
});

/**
 * Une fonction asynchrone qui gère la requête pour mettre à jour le profil de l'utilisateur.
 */
const updateUserProfile = createAsyncThunk('auth/updateUserProfile', async (profile, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    try {
        const response = await axios.put(`${API_URL}/profile`, profile, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
});

export { login, getUserProfile, updateUserProfile };
