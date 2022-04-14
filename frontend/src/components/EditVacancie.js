/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditVacancie = () => {
    const [company_vacancies, setCompany_vacancies] = useState('');
    const [occupation_vacancies, setOccupation_vacancies] = useState('');
    const [location_vacancies, setLocation_vacancies] = useState('');
    const [payment_vacancies, setPayment_vacancies] = useState('');
    const [journey_vacancies, setJourney_vacancies] = useState('');
    const [experience_vacancies, setExperience_vacancies] = useState('');
    const [note_vacancies, setNote_vacancies] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateVacancie = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/vacancies/${id}`,{
            company_vacancies: company_vacancies,
            occupation_vacancies: occupation_vacancies,
            location_vacancies: location_vacancies,
            payment_vacancies: payment_vacancies,
            journey_vacancies: journey_vacancies,
            experience_vacancies: experience_vacancies,
            note_vacancies: note_vacancies
        });
        navigate("/");
    }
 
    useEffect(() => {
        getVacancieById();
    }, []);
 
    const getVacancieById = async () => {
        const response = await axios.get(`http://localhost:5000/vacancies/${id}`);
        setCompany_vacancies(response.data.company_vacancies);
        setOccupation_vacancies(response.data.occupation_vacancies);
        setLocation_vacancies(response.data.location_vacancies);
        setPayment_vacancies(response.data.payment_vacancies);
        setJourney_vacancies(response.data.journey_vacancies);
        setExperience_vacancies(response.data.experience_vacancies);
        setNote_vacancies(response.data.note_vacancies);
    }
 
    return (
        <div>
            <form onSubmit={ updateVacancie }>
                <div className="field">
                    <label className="label">company_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="company_vacancies"
                        value={ company_vacancies }
                        onChange={ (e) => setCompany_vacancies(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">occupation_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="occupation_vacancies"
                        value={ occupation_vacancies }
                        onChange={ (e) => setOccupation_vacancies(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">location_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="location_vacancies"
                        value={ location_vacancies }
                        onChange={ (e) => setLocation_vacancies(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">payment_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="payment_vacancies"
                        value={ payment_vacancies }
                        onChange={ (e) => setPayment_vacancies(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">journey_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="journey_vacancies"
                        value={ journey_vacancies }
                        onChange={ (e) => setJourney_vacancies(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">experience_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="experience_vacancies"
                        value={ experience_vacancies }
                        onChange={ (e) => setExperience_vacancies(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <label className="label">note_vacancies</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="note_vacancies"
                        value={ note_vacancies }
                        onChange={ (e) => setNote_vacancies(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditVacancie
