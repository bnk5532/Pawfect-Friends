const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// const Image = sequelize.define("image", {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     image: {
//         type: DataTypes.BLOB("long"),
//       },
//     type: {
//       type: DataTypes.STRING,
//     },
//     name: {
//       type: DataTypes.STRING,
//     },
//     size: {
//       type: DataTypes.INTEGER,
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//     }
    
//   });


class Image extends Model {}

Image.init( 
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.BLOB("long"),
      },
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
    },
    pet_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'image'
  }
)


module.exports = Image;