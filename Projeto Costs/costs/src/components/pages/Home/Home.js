import React from "react"
import savings from "../../../img/savings.svg"
import styles from './Home.module.css'
import LinkButton from "../../layout/LinkButton/LinkButton"

const Home = () => {
    return (
        <section className={styles.home_container}>
            <img src={savings} alt="savings"></img>
            <div>
                <h1>Welcome to <span>Costs</span></h1>
                <p>Start to manage your projects, right now!</p>
                <LinkButton to='/newproject' text='Make a project' />
            </div>
        </section>
    )
}

export default Home;