export default function SeuNome({setNome}){
    return(
        <div>
            <p>Digite seu Nome:</p>
            <input type="text" placeholder="Me diga seu nome" onChange={(e) => setNome(e.target.value)} />
        </div>
    )
}