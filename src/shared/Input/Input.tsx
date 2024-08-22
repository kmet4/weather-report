import React from 'react';
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (inputProps) => {
    return <input className={styles.inputField} {...inputProps} />;
};