const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./user")

class Post extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    // UserID: {
    //     type: DataTypes.INTEGER, allowNull: true, required: true,
    //     references: {
    //         model: User, //reference to another model
    //         key: 'id' //column name of the referenced model
    //     }
    // },
    Course: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    Hole: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    },
    Type: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
    
module.exports = Post;



// references: {
//     model: User, //reference to another model
//     key: 'id', //column name of the referenced model
// }