import { useSelector } from 'react-redux';
import { RootState, textSelector } from '../../store/store';
import { ChangeEvent, memo, useEffect, useMemo, useRef, useState } from 'react';
import { Container } from '../structure';
import { TextCharacter } from '../text-character';
import { FinishedArea } from '../finished-area';
import styles from './text-area.module.scss';

const TextArea = memo(() => {
    const text = useSelector((state: RootState) => textSelector(state));
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [inputText, setInputText] = useState('');
    const [userClick, setUserClick] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [seconds, setSeconds] = useState(0);

    // При монтировании компонента переносим фокус на input для начала печати.
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Таймер.
    useEffect(() => {
        let intervalId: any;

        if (!isFinished) {
            intervalId = setInterval(() => setSeconds((prev) => prev + 1), 1000);
        }

        return () => clearInterval(intervalId);
    }, [isFinished]);

    // Подсчёт правильных нажатий
    const correctCharacterNumber = useMemo(() => {
        let count = 0;
        const inputCharacters = inputText.split('');
        const textCharacters = text.split('');
        textCharacters.forEach((char: string, index: number) => {
            if (inputCharacters[index] === char) count++;
        });
        return count;
    }, [inputText, text]);

    // Проверка правильности
    const correctCheck = useMemo(() => {
        const inputCharacters = inputText.split('');
        const textCharacters = text.split('');

        // Пробегаем по массиву символово и выводим их пользоваетлю на экран.
        return textCharacters.map((char, index) => {
            // Находим введённый символ
            const inputCharacter = inputCharacters[index];
            // Проверяем, правильный ли он
            const isCorrect = inputCharacter == char;
            // Если правильный - добавляем к правильным
            return {
                char: char,
                inputCharacter: inputCharacter || '',
                correct: isCorrect,
            };
        });
    }, [inputText, text]);

    // Изменение инпута при вводе текста
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Если введённый пользователем текст меньше длины тектса, то
        if (e.target.value.length != text.length) {
            setUserClick(userClick + 1);
            setInputText(e.target.value);
            // Иначе
        } else setIsFinished(!isFinished);
    };

    // Отключаем клавиши
    const disableButtons = (e: KeyboardEvent): void => {
        if (e.code == 'Backspace' || e.code == 'Ctrl') {
            e.stopPropagation();
            e.preventDefault();
        }
    };

    // Перезапускаем урок
    const resetLesson = () => {
        setInputText(''); // Очищаем введённый пользователем текст
        setUserClick(0); // Очищаем нажатия пользователя
        setIsFinished(!isFinished); // Устанавливаем isFinished на false, показывая, что уровень не закончен
        setSeconds(0); // Очищаем таймер
        setTimeout(() => {
            inputRef.current?.focus(); // Возвращаем фокус на инпут
        }, 10);
    };

    /* TODO:
        По возможности вместо инпута сделать проверку через OnKeyDown
    */

    return (
        <Container>
            <main onClick={() => inputRef.current?.focus()} className={styles.place}>
                {!isFinished ? (
                    <section className={styles.place__characters}>
                        <div className={styles.place__characters__checks}>
                            {correctCheck.map((item, index) => (
                                <TextCharacter character={item} index={index} key={index} />
                            ))}
                        </div>
                        <input
                            className={styles.place__characters__input}
                            ref={inputRef}
                            type='text'
                            value={inputText}
                            placeholder='Вводите текст'
                            onKeyDown={(e: any) => disableButtons(e)}
                            onChange={handleInputChange}
                        />
                        <div className={styles.place__characters__stats}>
                            <p>Всего символов введено: {userClick}</p>
                            <p>Правильных: {correctCharacterNumber}</p>
                            <p>Затраченное время: {seconds}</p>
                        </div>
                    </section>
                ) : (
                    <FinishedArea
                        correctCharacterCount={correctCharacterNumber}
                        allCharacterCount={userClick}
                        seconds={seconds}
                        restart={resetLesson}
                    />
                )}
            </main>
        </Container>
    );
});

export default TextArea;
