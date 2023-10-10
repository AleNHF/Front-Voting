import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/candidates/';

const CompShowCandidate = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect( () => {
        getCandidates();
    }, []);

    const getCandidates = async () => {
        const res = await axios.get(URI);
        setCandidates(res.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className="btn btn-primary mt-2 mb-2">Crear</Link>
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <th>Candidato</th>
                            <th>Nro. Celular</th>
                            <th>CI</th>
                            <th>Partido Político</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            { candidates.map( (candidate) => (
                                <tr key={ candidate.id }>
                                    <td>{ candidate.name } { candidate.lastname }</td>
                                    <td>{ candidate.phoneNumber }</td>
                                    <td>{ candidate.civilId }</td>
                                    <td>{ candidate.politicalParty }</td>
                                    <td>
                                        <Link to={`/edit/${candidate.id}`} className="btn btn-info">
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

export default CompShowCandidate;