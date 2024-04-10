import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div class="container-fluid">
                <h2>
                    <Link to="/" className="text-decoration-none text-dark">Tarefas</Link>
                </h2>
            </div>
        </nav>
    )
}

export default Navbar