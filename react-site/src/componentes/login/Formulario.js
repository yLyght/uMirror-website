import {useState} from "react"
import React from "react"

function Formulario(){
    
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`usuario ${name} cadastrado com sucesso`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlfor="name">Nome Completo:</label>
                    <input type="text" id="name" name="name" placeholder="Digite Seu Nome Completo" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlfor="password">Digite sua senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a Senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>            
            </form>
        </div>
    )
}

export default Formulario