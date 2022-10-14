module.exports = (sequelize, DataTypes) => {
    const budget = sequelize.define('budget',
    {
        namabarang:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        satuan:{
            type: DataTypes.STRING
        },
        quantityRAP: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }, 
        quantity: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }, 
        totalQTY:{
            type: DataTypes.DOUBLE
        },
        status:{
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
    return budget;
}