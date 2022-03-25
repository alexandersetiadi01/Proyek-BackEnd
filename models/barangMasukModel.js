module.exports = (sequelize, DataTypes) => {
    const barangMasuk = sequelize.define('barangMasuk',
    {
        namabarang:{ //FK master barang
            type: DataTypes.STRING,
            allowNull: false
        },
        kodemasuk:{ //PK auto increment
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
        noSuratJalan:{
            type: DataTypes.STRING
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
    return barangMasuk;
}