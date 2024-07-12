import { createSlice } from '@reduxjs/toolkit';
import { login, getUserProfile, updateUserProfile } from './authThunk';
import Cookies from 'js-cookie';

const tokenFromCookies = Cookies.get('token') || null;

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: tokenFromCookies, user: null, error: null },

    reducers: {

        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            Cookies.set('token', action.payload.token, { expires: 2 });
        },

        clearAuth: (state) => {
            state.token = null;
            state.user = null;
            state.error = null;
            Cookies.remove('token');
        },
    },

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
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.user = { ...state.user, ...action.payload };
                state.error = null;
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
