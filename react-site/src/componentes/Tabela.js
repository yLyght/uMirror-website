import Usuario from "./Usuario";

function Tabela () {
    return(
        <div>
            <h1>Status diario:</h1>
            <Usuario nome="Luiz Guilherme grz" uso="ativado" idade={16} statushumor="miseravel" />
        </div>
    )
}

export default Tabela;