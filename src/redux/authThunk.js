import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Une action asynchrone qui effectue une requête HTTP POST pour se connecter à l'API.
 */
const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
        return response.data.body;
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
});

/**
 * Une action asynchrone qui récupère le profil de l'utilisateur depuis le serveur.
 */
const getUserProfile = createAsyncThunk('auth/getUserProfile', async (token, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3001/api/v1/user/profile', {
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
 * Une action asynchrone qui met à jour le profil de l'utilisateur.
 */
const updateUserProfile = createAsyncThunk('auth/updateUserProfile', async (profile, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    try {
        const response = await axios.put('http://localhost:3001/api/v1/user/profile', profile, {
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
