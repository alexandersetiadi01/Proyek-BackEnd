module.exports = (sequelize, DataTypes) => {
    const barangSisa = sequelize.define('barangSisa',
    {
        namabarang:{ //FK master barang
            type: DataTypes.STRING,
            allowNull: false
        },
        kodeSisa:{ //PK auto increment
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        namaPenerima:{
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        tgl:{ 
            allowNull: false,
            type: DataTypes.DATEONLY
        }, 
        status:{
            type: DataTypes.STRING
        },
        lokasi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        proyek:{
            type: DataTypes.STRING
        },
        keterangan:{
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
    });
    return barangSisa;
}