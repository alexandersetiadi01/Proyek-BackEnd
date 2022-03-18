module.exports = (sequelize, DataTypes) => {
    const PO = sequelize.define('PO',
    {
        kodePO:{ 
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        proyek: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return PO;
}