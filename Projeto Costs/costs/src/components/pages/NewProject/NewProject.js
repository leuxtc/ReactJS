import React from "react"
import Form from "../../form/Form"
import styles from './NewProject.module.css'

const NewProject = () => {
    return (
        <section className={styles.NP_container}>
            <div>
                <h1>Make a <span>project</span></h1>
                <p>First create your project for later you add your services </p>
            </div>
            <Form btnText="Create a Project" />
        </section>
    )
}

export default NewProject