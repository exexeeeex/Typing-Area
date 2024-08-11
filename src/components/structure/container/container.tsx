import React, { FC } from 'react';
import styles from './container.module.scss';

const Container: FC<React.PropsWithChildren> = ({ children }) => (
    <div className={styles.container}>{children}</div>
);
export default Container;
