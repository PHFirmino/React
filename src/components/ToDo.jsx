import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import ToDoAcoes from "./ToDoAcoes";

function ToDo(){

    return(
        <>
            <div class="container-fluid">
                <Navbar/>
                <Link className="btn btn-success" to="/adicionar">Adicionar</Link>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ToDoAcoes/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ToDo
