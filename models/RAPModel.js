module.exports = (sequelize, DataTypes) => {
    const RAP = sequelize.define('RAP',
    {
        namabarang:{
            type: DataTypes.STRING,
            allowNull: false
        },
        harga: {
            type: DataTypes.DOUBLE,
        },
        quantity: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        satuan: {
            type: DataTypes.STRING,
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
    return RAP;
}