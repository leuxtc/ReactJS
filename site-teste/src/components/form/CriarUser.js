function CriarUser({ name, email, senha }) {
    function gerarUser() {
        console.log(`
            Usuário: ${name} 
            Email: ${email} 
            Senha: ${senha}`)
    }

    return (
        <>
            <button
                className="Bttn"
                onClick={gerarUser}>Fazer login
            </button>
        </>
    )
}

export default CriarUser