import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Une fonction asynchrone qui effectue une requête HTTP POST pour se connecter à l'API.
 */
const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
        return response.data.body;
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
});

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
 * Un slice pour gérer l'état de l'authentification.
 */
const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, user: null, error: null },
    reducers: {
        /**
         * Définit le token et les informations de l'utilisateur dans l'état.
         *
         * @param {Object} state - L'état actuel.
         * @param {Object} action - L'action dispatchée contenant le token et les informations de l'utilisateur.
         */
        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        /**
         * Réinitialise l'état de l'authentification.
         *
         * @param {Object} state - L'état actuel.
         */
        clearAuth: (state) => {
            state.token = null;
            state.user = null;
            state.error = null;
        },
    },
    /**
     * Des reducers supplémentaires pour gérer le résultat de la requête de connexion.
     */
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = { email: action.meta.arg.email };
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                    state.user = action.payload;
                    state.error = null;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export { login, getUserProfile };
export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
