"use strict";
module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('User', {
        empid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: { type: Sequelize.STRING,
            allowNull: false
        },
        middlename: { type: Sequelize.STRING },
        lastname: { type: Sequelize.STRING,
            allowNull: false },
        email: {
            type: Sequelize.STRING,
            validate: { isEmail: true
            },
            allowNull: false
        },
        phoneno: {
            type: Sequelize.BIGINT,
            validate: {
                is: ["^((\\+91-?)|0)?[0-9]{10}$", 'i']
            }
        },
        role: {
            type: Sequelize.INTEGER,
            validate: {
                isIn: [['0', '1', '2']]
            }
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return user;
};
