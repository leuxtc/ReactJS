import styles from './Select.module.css'

const Select = ({ text, name, options, handleOnChange, value }) => {
    return (
        <div className={styles.form_container}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Select a option</option>
            </select>
        </div>
    )
}

export default Select