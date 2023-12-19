function User({name, foto, idade, profissao}) {
    return (
        <div>
            <img src={foto} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default User