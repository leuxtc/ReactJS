function Forms({ setName, setEmail, setPassword }) {
    return (
        <>
            <h1>Login</h1>
            <form className="Form">
                <div>
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="seuemail@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
            </form>
        </>
    )
}

export default Forms