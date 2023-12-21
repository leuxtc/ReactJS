import { useState } from "react"

function Form() {

    function cadastrarUser(e) {
        e.preventDefault()
        console.log(`Usuário: ${name} Senha: ${password}`)
    }

    const [ name, setName ] = useState()
    const [ password, setPassword ] = useState()

    return (
        <>
            <h1>Informe seus dados:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input 
                    type="submit" 
                    placeholder="Enviar" 
                    value="Cadastrar"/>
                </div>
            </form>
        </>
    )

}

export default Form