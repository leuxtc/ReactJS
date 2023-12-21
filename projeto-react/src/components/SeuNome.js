function SeuNome({ setName }) {
    return (
        <>
            <p>Seu nome:</p>
            <input 
                type="text" 
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}>
            </input>
        </>
    )
}

export default SeuNome