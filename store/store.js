import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { mobileMenuSlice } from '@/store/slices/mobileMenuSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            [mobileMenuSlice.name]: mobileMenuSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
