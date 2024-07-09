import { createSlice } from '@reduxjs/toolkit';
import { login, getUserProfile, updateUserProfile } from './authThunk';

/**
 * Un reducer qui gère l'authentification de l'utilisateur.
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

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
