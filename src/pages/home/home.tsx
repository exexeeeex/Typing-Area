import { useState } from 'react';
import { Container, TextArea } from '../../components';
import styles from './home.module.scss';

const Home = () => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <Container>
            <main className={styles.place}>
                {!visible && (
                    // Если visible = false, то показываем начальный экран, иначе - показываем поле для ввода
                    <h1 onClick={() => setVisible(!visible)} className={`${styles.place__start}`}>
                        Начать
                    </h1>
                )}
                {visible && <TextArea />}
            </main>
        </Container>
    );
};

export default Home;
