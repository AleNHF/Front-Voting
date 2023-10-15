import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/voters/';

const CompShowVoters = () => {
    const [voter, setVoters] = useState([]);

    useEffect( () => {
        getVoters();
    }, []);

    const getVoters = async () => {
        const res = await axios.get(URI);
        setVoters(res.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className="btn btn-primary mt-2 mb-2">Crear</Link>
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <th>Votante</th>
                            <th>Nro. Celular</th>
                            <th>CI</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            { voters.map( (voter) => (
                                <tr key={ voter.id }>
                                    <td>{ voter.name } { voter.lastname }</td>
                                    <td>{ voter.phoneNumber }</td>
                                    <td>{ voter.civilId }</td>
                                    <td>{ voter.birthday }</td>
                                    <td>{ voter.occupation }</td>
                                    <td>
                                        <Link to={`/edit/${voter.id}`} className="btn btn-info">
                                            <i className="fas fa-edit"></i>                                          
                                        </Link>                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowVoters;