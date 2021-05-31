import styles from './style/Input.module.css';

const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
};
export default Input;
