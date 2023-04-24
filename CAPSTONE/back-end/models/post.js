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
    // commentId: {
    //     type: DataTypes.INTEGER, allowNull: true, required: true,
    //     references: {
    //         model: Comment, // reference to another model
    //         key: 'id' // column name of the referenced model
    //     }
    // },
    isFound: {
        type: DataTypes.BOOLEAN, allowNull: false, required: true
    },
    course: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    hole: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    type: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    image: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
}, 
    {
        sequelize: sequelizeInstance, modelName: 'posts', // use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)

module.exports = Post;