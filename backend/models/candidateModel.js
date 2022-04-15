import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;

const Candidate = db.define('candidates',{
	number_candidates:{
        type: DataTypes.STRING
    },
    name_candidates:{
        type: DataTypes.STRING
    },
    email_candidates:{
        type: DataTypes.STRING
    },
    telephone_candidates:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Candidate;
