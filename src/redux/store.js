import { configureStore} from '@reduxjs/toolkit'
import {germanyReducer} from "@/redux/germany/slice/germanySlice.js";
import {frenchReducer} from "@/redux/french/slice/frenchSlice.js";
import {englandReducer} from "@/redux/england/slice/englandSlice.js";
import {cartItemReducer} from "@/redux/cartItem/slice/cartItemSlice.js";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartItemReducer)

export const store = configureStore({
    reducer: {
        french: frenchReducer,
        england: englandReducer,
        germany: germanyReducer,
        cartItem: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);