import LinkButton from "../layout/LinkButton"
import styles from './Form.module.css'

const Form = () => {
    return (
        <form className={styles.form_container}>
            <div>
                <label for="pjct_name">Project name:</label>
                <input id="pjct_name" type="text" placeholder="Insert project name" ></input>
            </div>
            <div>
                <label for="total_costs">Project budget:</label>
                <input id="total_costs" type="number" placeholder="Insert total costs" ></input>
            </div>
            <div>
                <label for="category">Select the category:</label>
                <select id="category">
                    <option>Select a option</option>
                    <option value=''>Development</option>
                    <option value=''>Infrastructure</option>
                    <option value=''>Design</option>
                    <option value=''>Planning</option>
                </select>
            </div>
            <LinkButton to='/projects' text='create project'/>
        </form>
    )
}

export default Form