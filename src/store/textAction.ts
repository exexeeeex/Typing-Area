export const INPUT_UPDATE = 'UPDATE';
export const TEXT_SET = 'SET';

// Интерфейс для обновления инпута
export interface InputUpdateAction {
    type: typeof INPUT_UPDATE;
    payload: string;
}

// Интерфейс для установки нового текста
export interface TextSetAction {
    type: typeof TEXT_SET;
    payload: string;
}

// Метод для установки нового текста
export const textSet = (text: string): TextSetAction => ({
    type: TEXT_SET,
    payload: text,
});
