import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
                                           children,
                                           ...rest
                                       }) => {
    return (
        <button
            className={styles.button}
            {...rest}
        >
            {children}
        </button>
    );
};