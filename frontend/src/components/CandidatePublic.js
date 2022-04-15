import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import React from 'react';
import Modal from '@material-ui/core/Modal';

import { useNavigate } from 'react-router-dom';
 
const VacanciePublic = () => {
    const [vacancies, setVacancie] = useState([]);
 
    useEffect(() => {
        getVacancies();
    }, []);
 
    const getVacancies = async () => {
        const response = await axios.get('http://localhost:5000/vacancies');
        setVacancie(response.data);
    }
    
/* ################################################ */
/* ################################################ */
    
    const [number_candidates, setNumber_candidates] = useState('');
    const [name_candidates, setName_candidates] = useState('');
    const [email_candidates, setEmail_candidates] = useState('');
    const [telephone_candidates, setTelephone_candidates] = useState('');
    const navigate = useNavigate();
 
    const saveCandidate = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/candidates',{
			number_candidates: number_candidates,
            name_candidates: name_candidates,
            email_candidates: email_candidates,
            telephone_candidates: telephone_candidates
        });
        navigate("/public");
    }
    
     
/* ################################################ */
/* ################################################ */
    return (
    

     
        <div id="plx_container">
			{ vacancies.map((vacancie, index) => (
			<div key={ vacancie.id }>
			<div id="plx_vacancies">
				<div id="plx_up">
					<div id="plx_company_vacancies">
					{ vacancie.company_vacancies }
					</div>
					<div id="plx_occupation_vacancies">
					{ vacancie.occupation_vacancies }
					</div>
					<div id="plx_location_vacancies">
					{ vacancie.location_vacancies }
					</div>
					<div id="plx_payment_vacancies">
					{ vacancie.payment_vacancies }
					</div>
					<div id="plx_journey_vacancies">
					{ vacancie.journey_vacancies }
					</div>
				</div>
				<div id="plx_down">
					<div id="plx_experience_vacancies">
					Experiência: { vacancie.experience_vacancies }
					</div>
					<div id="plx_note_vacancies">
					Observações: { vacancie.note_vacancies }
					</div>
					<div id="plx_cv_vacancies">
				
				
{/* ################################################ */}
{/* ################################################ */}

   <label>
  <input type="checkbox" />
  <div><b>Enviar CV</b></div>
  <div id="cnt">

  <form onSubmit={ saveCandidate }>
					
					<div className="field">
                    <label className="label"></label>
                    <input className="input" type="text" placeholder="NOME" value={ name_candidates } onChange={ (e) => setName_candidates(e.target.value) } />
					</div>
 
					<div className="field">
                    <label className="label"></label>
                    <input className="input" type="text" placeholder="EMAIL" value={ email_candidates } onChange={ (e) => setEmail_candidates(e.target.value) } />
					</div>
                
					<div className="field">
                    <label className="label"></label>
                    <input className="input" type="text" placeholder="TELEFONE" value={ telephone_candidates } onChange={ (e) => setTelephone_candidates(e.target.value) } />
					</div>
 
					<div className="field">
                    <button className="button is-primary" onClick={ (e) => setNumber_candidates(vacancie.id ) }>Salvar</button>
					</div>
					
					</form>

  </div>
  <div className="close">X</div>
</label>

{/* ################################################ */}
{/* ################################################ */}

					
					
					
				

					</div>
				</div>
			</div>
			</div>
			)) }
        </div>
    )
}
 
export default VacanciePublic
