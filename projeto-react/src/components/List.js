import Item from './Item'

function List() {
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Fusca" ano_lancamento={1983}/>
                <Item marca="Uno" ano_lancamento={1974}/>
                <Item marca={1920} ano_lancamento="1973"/>
                <Item/>
            </ul>
        </>
    )
}

export default List