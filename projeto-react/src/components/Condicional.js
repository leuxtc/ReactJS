import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <>
            <h2>Cadastre-se</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Seu Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar Email
                </button>
                {userEmail && (
                <div>
                    <p>Cadastro: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
                )}
            </form>
        </>
    )
}

export default Condicional