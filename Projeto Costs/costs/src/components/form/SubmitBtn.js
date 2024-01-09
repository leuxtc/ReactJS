import style from './SubmitBtn.module.css'

const SubmitBtn = ({ text }) => {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}

export default SubmitBtn 