import { INPUT_UPDATE, TEXT_SET, InputUpdateAction, TextSetAction } from './textAction';

//Интерфейс начального состояния
export interface InitialState {
    text: string;
}

// начальное состояние
const initialState: InitialState = {
    text: 'Учитывая ключевые сценарии поведения, сплочённость команды профессионалов предопределяет высокую востребованность переосмысления внешнеэкономических политик. Таким образом, граница обучения кадров в значительной степени обусловливает важность системы обучения кадров, соответствующей насущным потребностям. Есть над чем задуматься: предприниматели в сети интернет указаны как претенденты на роль ключевых факторов.',
};

// Создаём редюсер
const reducer = (state = initialState, action: InputUpdateAction | TextSetAction) => {
    switch (action.type) {
        // Если действие = INPUT_UPDATE
        case INPUT_UPDATE:
            return { ...state, inputText: action.payload };
        // Если действие = TEXT_SET, то к состоянию текста добавляем
        case TEXT_SET:
            return { ...state, text: action.payload };
        // Обычное состояние
        default:
            return state;
    }
};

export default reducer;
