import LinkButton from "../layout/LinkButton/LinkButton"
import styles from './Form.module.css'
import Input from "./Input"
import Select from "./Select"
import SubmitBtn from "./SubmitBtn"

const Form = ({btnText}) => {
    return (
        <form className={styles.form_container}>
            <Input
                type="text"
                text="Project name"
                name="name"
                placeholder="Insert project name" />
            <Input
                type="number"
                text="Total budge"
                name="budge"
                placeholder="$ 0,00"
            />
            <Select
                name="category_id"
                text="Select a category" 
            />
            <SubmitBtn text={btnText} />
        </form>
    )
}

export default Form