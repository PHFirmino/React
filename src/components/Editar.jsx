import React from "react"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Editar(){

    const { id } = useParams()
    const [toDo, setToDo] = useState([])
    const [carregado, setCarregado] = useState(false)
    const [desc, setDesc] = useState("")
    const [status, setStatus] = useState(false)

    console.log(id)

    setTimeout(() => {
        setCarregado(true)
    }, 1000)

    try{
        useEffect(() => {
            fetch("http://localhost:8000/toDo/" + id, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            .then(response => response.json())
            .then(data => {
                setToDo(data),
                setDesc(toDo.descricao),
                setStatus(toDo.status)
            })
        }, [carregado])
    }
    catch(e){
        console.log(e)
    }

    function mudarStatus(e){
        if(e.target.checked){
            setStatus(true)
        }else{
            setStatus(false)
        }
    }

    function mudarDesc(e){
        setDesc(e.target.value)
    }

    function att(){
        const attToDO = {
            id :id,
            descricao : desc,
            status : status
        }

        try{
            fetch("http://localhost:8000/toDo/" + id,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(attToDO)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <div className="container-fluid">
                <Navbar/>
                <div>{carregado == false ? <p>Carregando...</p> : 
                    <form onSubmit={att}>
                        <label htmlFor="desc">Descrição</label>
                        <input type="text" id="desc" className="form-control" value={desc} onChange={mudarDesc}/>
                        
                        <label htmlFor="status">Status</label>
                        <input type="checkbox" className="form-check-input" name="status" id="status" checked={status} onChange={mudarStatus}/>
                        <div className="mt-3">
                            <input type="submit" className="btn btn-success" value="Atualizar"/>
                        </div>
                    </form>
                }</div>
            </div>
        </>
    )
}

export default Editar