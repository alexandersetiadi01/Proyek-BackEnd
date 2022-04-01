module.exports = (sequelize, DataTypes) => {
    const inventoryKantorKelurahanCilenggang = sequelize.define('inventoryKantorKelurahanCilenggang',
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
        satuan:{
            type: DataTypes.STRING
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
    return inventoryKantorKelurahanCilenggang;
}