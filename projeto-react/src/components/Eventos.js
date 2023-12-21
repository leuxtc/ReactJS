import Button from './Button'

function Eventos() {
    function meuEvento() {
        console.log("Olá!")
    }

    function segundoEvento() {
        console.log("Segundo evento!")
    }

    return (
        <>
            <h1>Clique Aqui!</h1>
            <Button event={meuEvento} text={"Primeiro evento"} />
            <Button event={segundoEvento} text={"Segundo Evento"} />
        </>
    )
}

export default Eventos