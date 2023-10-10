import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/candidates/';

const CompCreateCandidate = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [civilId, setCivilId] = useState();
    const [address, setAddress] = useState();
    const [genre, setGenre] = useState();
    const [politicalParty, setPoliticalParty] = useState();
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        axios.post(URI, {
            name: name,
            lastname: lastname,
            phoneNumber: phone,
            email: email,
            civilId: civilId,
            address: address,
            genre: genre,
            politicalParty: politicalParty
        });
        navigate('/');
    }

    return (
        <div>
            <h3>Crear Candidato</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input 
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                    <label className="form-label">Apellidos</label>
                    <input 
                        value={lastname}
                        onChange={ (e) => setLastname(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                    <label className="form-label">Nro. Celular</label>
                    <input 
                        value={phone}
                        onChange={ (e) => setPhone(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                    <label className="form-label">Correo electrónico</label>
                    <input 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                    <label className="form-label">Carnet de Identidad</label>
                    <input 
                        value={civilId}
                        onChange={ (e) => setCivilId(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                    <label className="form-label">Género</label>
                    <input 
                        value={genre}
                        onChange={ (e) => setGenre(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                    <label className="form-label">Partido Político</label>
                    <input 
                        value={politicalParty}
                        onChange={ (e) => setPoliticalParty(e.target.value) }
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default CompCreateCandidate;