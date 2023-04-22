const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model { }

//Sequelize will create this table if it doesn't exist on startup
User.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    Username: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    },
    First_Name: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    Last_Name: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    Email: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    },
    Password: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'users', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)

module.exports = User;



// references: {
//     model: User, //reference to another model
//     key: 'id', //column name of the referenced model
// }