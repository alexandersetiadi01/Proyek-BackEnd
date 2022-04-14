module.exports = (sequelize, DataTypes) => {
    const Satuan = sequelize.define('Satuan',
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
    return Satuan;
}