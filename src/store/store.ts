import { configureStore, createSelector } from '@reduxjs/toolkit';
import reducer from './textReducer';

// Создаём стор
export const store = configureStore({
    reducer,
});

// Жкспортируем диспетчер
export type AppDispatch = typeof store.dispatch;
// Экспортируем состояние
export type RootState = ReturnType<typeof store.getState>;
// Создаём и экспортируем селектор
export const textSelector = createSelector(
    (state: RootState) => state,
    (state: RootState) => state.text,
);
