import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

// Initialize store with persisted state if available
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('auth');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const preloadedState = {
    auth: loadState()
};

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    preloadedState,
})

// Subscribe to store changes to persist auth state
store.subscribe(() => {
    try {
        const state = store.getState();
        localStorage.setItem('auth', JSON.stringify(state.auth));
    } catch (err) {
        console.error('Could not save auth state:', err);
    }
});

export default store;