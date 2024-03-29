import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const VacancieList = () => {
    const [vacancies, setVacancie] = useState([]);
 
    useEffect(() => {
        getVacancies();
    }, []);
 
    const getVacancies = async () => {
        const response = await axios.get('http://localhost:5000/vacancies');
        setVacancie(response.data);
    }
 
    const deleteVacancie = async (id) => {
        await axios.delete(`http://localhost:5000/vacancies/${id}`);
        getVacancies();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>company_vacancies</th>
                        <th>occupation_vacancies</th>
                        <th>location_vacancies</th>
                        <th>payment_vacancies</th>
                        <th>journey_vacancies</th>
                        <th>experience_vacancies</th>
                        <th>note_vacancies</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { vacancies.map((vacancie, index) => (
                        <tr key={ vacancie.id }>
                            <td>{ vacancie.id }</td>
                            <td>{ vacancie.company_vacancies }</td>
                            <td>{ vacancie.occupation_vacancies }</td>
                            <td>{ vacancie.location_vacancies }</td>
                            <td>{ vacancie.payment_vacancies }</td>
                            <td>{ vacancie.journey_vacancies }</td>
                            <td>{ vacancie.experience_vacancies }</td>
                            <td>{ vacancie.note_vacancies }</td>
                            <td>
                                <Link to={`/edit/${vacancie.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteVacancie(vacancie.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default VacancieList
