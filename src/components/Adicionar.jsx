import React, { useContext, useState } from "react";
import { ContextToDo } from "./ContextToDo";
import Navbar from "./Navbar";

function Adicionar(){

    const {qntToDo, setQntToDo} = useContext(ContextToDo)
    const [desc, setDesc] = useState("")
    const [status, setStatus] = useState(false)
    const [id, setId] = useState(qntToDo+1)

    function adicionarItem(e){

        const toDOAdicionado = {
            id: id,
            descricao: desc,
            status : status
        }

        const transformando = JSON.stringify(toDOAdicionado)

        try{
            fetch("http://localhost:8000/toDo/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: transformando
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <div class="container-fluid">
                <Navbar/>
                <form onSubmit={adicionarItem}>
                    <label htmlFor="desc">Descrição</label>
                    <input type="text" className="form-control" id="desc" name="des" value={desc} onChange={(e) => setDesc(e.target.value)}/>

                    <input type="submit" className="btn btn-success" value="Enviar" />
                </form>
            </div>
        </>
    )
}

export default Adicionar