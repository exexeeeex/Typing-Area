import { FC } from 'react';
import styles from './finished-area.module.scss';

interface FinishedArea {
    correctCharacterCount: number;
    allCharacterCount: number;
    seconds: number;
    restart: () => void;
}
const FinishedArea: FC<FinishedArea> = ({
    correctCharacterCount,
    allCharacterCount,
    seconds,
    restart,
}) => (
    <div className={styles.place}>
        <p>
            Правильных символов введено:{' '}
            <span style={{ color: 'green' }}>{correctCharacterCount}</span>
        </p>
        <p>
            Неправильных символов введено:{' '}
            <span style={{ color: 'red' }}>{allCharacterCount - correctCharacterCount}</span>
        </p>
        <p>
            Затрачено времени: <span style={{ color: 'whitesmoke' }}>{seconds}</span>
        </p>
        <p>
            WPM:{' '}
            <span style={{ color: 'whitesmoke' }}>
                {Math.round(((allCharacterCount / (seconds / 60)) * 10) / 10)}
            </span>
        </p>
        <button onClick={restart} className={styles.place__restart}>
            Перезапустить
        </button>
    </div>
);
export default FinishedArea;
