import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Vacancie = db.define('vacancies',{
    company_vacancies:{
        type: DataTypes.STRING
    },
    occupation_vacancies:{
        type: DataTypes.STRING
    },
    location_vacancies:{
        type: DataTypes.STRING
    },
    payment_vacancies:{
        type: DataTypes.STRING
    },
    journey_vacancies:{
        type: DataTypes.STRING
    },
    experience_vacancies:{
        type: DataTypes.STRING
    },
    note_vacancies:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Vacancie;
