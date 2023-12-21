function Saudacao({ name }) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, Tudo bem?`
    }

    return <>{name &&<p>{gerarSaudacao(name)}</p>}</>
}

export default Saudacao