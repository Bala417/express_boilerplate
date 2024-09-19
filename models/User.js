// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT('medium'),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
}, {
    // Table options
    tableName: 'users', // If your table name is not the plural form of your model name, specify it here.
    timestamps: false,  // If you already have `created_at` and `updated_at` fields, disable the automatic `timestamps` feature
    underscored: true,  // Set to true if your database uses snake_case column names
    hooks: {
        beforeUpdate: (user) => {
            user.updated_at = new Date();
        }
    }
});

module.exports = User;
