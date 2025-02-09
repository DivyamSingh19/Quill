import { createSlice } from "@reduxjs/toolkit"

 
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('authState');
        if (serializedState === null) {
            return {
                status: false,
                userData: null
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            status: false,
            userData: null
        };
    }
};

const initialState = loadState();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
             
            localStorage.setItem('authState', JSON.stringify({
                status: true,
                userData: action.payload.userData
            }));
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
             
            localStorage.removeItem('authState');
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;