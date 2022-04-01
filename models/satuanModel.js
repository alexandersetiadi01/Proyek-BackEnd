module.exports = (sequelize, DataTypes) => {
    const satuan = sequelize.define('satuan',
    {
        satuan:{ //PK
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return satuan;
}