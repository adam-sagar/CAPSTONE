const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./user");
const Post = require("./post");

class Comment extends Model { }

// Sequelize will create this table if it doesn't exist on startup
Comment.init({

    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: User, // reference to another model
            key: 'id' // column name of the referenced model
        }
    }, 
    postId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: Post, // reference to another model
            key: 'id' // column name of the referenced model
        }
    },
    content: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'comments', // use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
  
module.exports = Comment;