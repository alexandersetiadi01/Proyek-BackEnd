module.exports = (sequelize, DataTypes) => {
    const inventory = sequelize.define('inventory',
    {
        /*id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        namabarang:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        proyek: {
            type: DataTypes.STRING,
            //allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return inventory;
}