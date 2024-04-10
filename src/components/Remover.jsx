import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Remover(){

    const { id } = useParams();
    const [carregado, setCarregado] = useState(false)
    const [toDo, setToDo] = useState([])
    
    setTimeout(() => {
        setCarregado(true);
    }, 1000)

    try{
        useEffect(() => {
            fetch("http://localhost:8000/toDo/" + id, {
                method: "GET",
                headers : {"Content-Type" : "application/json"}
            })
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setToDo(data)
            })
        }, [carregado])
    }
    catch(e){
        console.log(e)
    }

    function removerToDo(){
        try{
            fetch("http://localhost:8000/toDo/" + id, {
                method: "DELETE",
                headers : {"Content-Type" : "application/json"}
            })
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <div class="container-fluid">
                <Navbar />
                {carregado == false ? "Carregando..." : 
                    <form onSubmit={removerToDo}>
                            <div>
                                <p>{toDo.id}</p>
                                <p>{toDo.descricao}</p>
                                <p>{toDo.status == true ? "Completo" : "Incompleto"}</p>
                            </div>
                            <input type="submit" value="Deletar" className="btn btn-danger"/>
                    </form>
                }
            </div>
        </>
    )
}

export default Remover