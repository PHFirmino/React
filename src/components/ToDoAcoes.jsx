import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { ContextToDo } from "./ContextToDo";

function ToDoAcoes(){

    const {qntToDo, setQntToDo} = useContext(ContextToDo)
    const [lista, setLista] =  useState([])
    const [carregado, setCarrgado] = useState(false)
    
    setTimeout(()=>{
        setCarrgado(true);
    }, 1000)

    try{
        useEffect(() => {
            fetch("http://localhost:8000/toDo", {
                method:"GET",
                headers:{"Content-Type":"application/json"}
            })
            .then(response=> response.json())
            .then((data) => {
                console.log(data), 
                setLista(data),
                setQntToDo(lista.length)
            })
        }, [carregado])
    }
    catch(e){
        console.log(e)
    }

    return(
        <>
            {carregado == false ? <p>Carregando...</p> :                
                lista.map((item) => 
                <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.descricao}</td>
                    <td>{item.status == true ? "Completo" : "Incompleto"}</td>
                    <td><Link to={"/remover/" + item.id} className="btn btn-danger mt-3">Remover</Link> <Link  to={"/editar/" + item.id} className="btn btn-warning mt-3 text-light">Editar</Link></td>
                </tr>
                )
            }
        </>
    )
}

export default ToDoAcoes;