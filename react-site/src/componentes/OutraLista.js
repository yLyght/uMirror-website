function OutraLista({ itens }){
    return (
// um IF com ELSE tomar cuidado ja que tem o map no meio, mas segue basicamente esse padrão estudar mais depois
        <>
            <h3>Lista Exemplo:</h3>
            {itens.lenght > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))): (
                <p>Não ha itens na lista!</p>
            )}
        </>       
    )
}

export default OutraLista