import { FC } from 'react';
import styles from './text-character.module.scss';

interface TextCharacter {
    index: number;
    character: {
        char: string;
        inputCharacter: string;
        correct: boolean;
    };
}

const TextCharacter: FC<TextCharacter> = ({ character }) => (
    <span
        className={styles.character}
        /* Установка стилей по условию:
            Если вводимый символ не равен пустой строке, то 
                Если вводимый символ корректный - зелёный цвет, иначе красный
            Иначе цвет текста
        */
        style={{
            color:
                character.inputCharacter !== ''
                    ? character.correct
                        ? 'green'
                        : 'red'
                    : 'var(--text-color)',
        }}
    >
        {character.char}
    </span>
);

export default TextCharacter;
