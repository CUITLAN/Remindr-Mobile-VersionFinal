import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import debounce from 'lodash.debounce';

// Guardar el estado en AsyncStorage
const saveToAsyncStorage = debounce(async (state) => {
    try {
        const serializedState = JSON.stringify(state);
        await AsyncStorage.setItem('reduxState', serializedState);
    } catch (e) {
        console.error("No se pudo guardar el estado en AsyncStorage", e);
    }
}, 1000); // Evitar guardados excesivos

// Cargar el estado desde AsyncStorage
const loadFromAsyncStorage = async () => {
    try {
        const serializedState = await AsyncStorage.getItem('reduxState');
        if (!serializedState) {
            console.log("No se encontró estado persistido en AsyncStorage");
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("No se pudo cargar el estado desde AsyncStorage", e);
        return undefined;
    }
};

// Inicializar el store
const initializeStore = async () => {
    const persistedState = await loadFromAsyncStorage();

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: persistedState,
    });

    store.subscribe(() => {
        saveToAsyncStorage(store.getState());
    });

    return store;
};

export default initializeStore;
