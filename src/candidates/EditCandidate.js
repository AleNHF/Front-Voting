import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/candidates/';

const CompEditCandidate = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [civilId, setCivilId] = useState();
    const [address, setAddress] = useState();
    const [genre, setGenre] = useState();
    const [politicalParty, setPoliticalParty] = useState();
    const navigate = useNavigate();

    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(URI+id, {
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

    useEffect( () => {
        getCandidateById();
    }, []);

    const getCandidateById = async () => {
        const res = await axios.get(URI+id);

        setName(res.data.name);
        setLastname(res.data.lastname);
        setPhone(res.data.phoneNumber);
        setEmail(res.data.email);
        setCivilId(res.data.civilId);
        setAddress(res.data.address);
        setGenre(res.data.genre);
        setPoliticalParty(res.data.politicalParty);
    }

    return (
        <div>
            <h3>Editar Candidato</h3>
            <form onSubmit={update}>
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
                    Editar
                </button>
            </form>
        </div>
    );
}

export default CompEditCandidate;