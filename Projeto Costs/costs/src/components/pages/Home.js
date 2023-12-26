import React from "react"
import styles from './Home.module.css'
import savings from "../../img/savings.svg"

const Home = () => {
    return (
        <section className={styles.home_container}>
            <img className={styles.img} src={savings} alt="savings"></img>
            <div>
                <h1>Welcome to <span>Costs</span></h1>
                <p>Start to manage your projects, right now!</p>
                <a href="./NewProject" className={styles.button}>Make Projects</a>
            </div>
        </section>
    )
}

export default Home;