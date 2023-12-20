// FRAGMENTS

import Item from './Item'

function List() {
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Fusca"/>
                <Item marca="Uno" />
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List