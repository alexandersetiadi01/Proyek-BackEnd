module.exports = (sequelize, DataTypes) => {
    const supplier = sequelize.define('supplier',
    {
        namaSupplier:{ //PK
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        Pic:{
            type: DataTypes.STRING,
        },
        tlp:{
            type: DataTypes.STRING
        },
        code:{
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return supplier;
}