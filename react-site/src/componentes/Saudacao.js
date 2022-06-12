function Saudacao({ nome }) {
    
    function GerarSaudação(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }
//isso aqui em baixo é um IF sem else, então legal quando não precisa realmente verificar, serve mais para esconder as coisas
    return(
        <div>
            { nome && <p>{GerarSaudação(nome)}</p> }
        </div>    
    )
}

export default Saudacao