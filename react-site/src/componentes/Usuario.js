function Usuario({nome, idade, uso, statushumor}) {

    return(
        <div>
            <h2>Bem vindo, {nome}, como vai seu dia?</h2>
            <li>
                idade: {idade}               
            </li>
            <li>
                status: {uso}
            </li>
            <li>
                Humor: {statushumor}
            </li>
        </div>
    )
}

Usuario.defaultProps = {
    nome: "erro",
    idade: "erro",
    status: "desativado",
    statushumor: "Desconhecido",
}

export default Usuario;