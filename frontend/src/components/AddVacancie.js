import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddVacancie = () => {
    const [company_vacancies, setCompany_vacancies] = useState('');
    const [occupation_vacancies, setOccupation_vacancies] = useState('');
    const [location_vacancies, setLocation_vacancies] = useState('');
    const [payment_vacancies, setPayment_vacancies] = useState('');
    const [journey_vacancies, setJourney_vacancies] = useState('');
    const [experience_vacancies, setExperience_vacancies] = useState('');
    const [note_vacancies, setNote_vacancies] = useState('');
    const navigate = useNavigate();
 
    const saveVacancie = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/vacancies',{
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
 
    return (
        <div>
            <form onSubmit={ saveVacancie }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddVacancie
