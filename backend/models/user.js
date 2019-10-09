module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        userId: {
            type: DataTypes.STRING(50),
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        timestamps: true
    });
};