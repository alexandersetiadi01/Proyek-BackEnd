module.exports = (sequelize, DataTypes) => {
    const barangMasuk = sequelize.define('barangMasuk',
    {
        kodemasuk:{ //PK auto increment
            type: DataTypes.INTEGER,
            primaryKey: true,
            // autoIncrement: true
        },
        // kodePO: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        kodebarang:{ //FK master barang
            type: DataTypes.STRING,
            allowNull: false
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
        status:{
            type: DataTypes.STRING
        },
        lokasi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        satuan:{
            type: DataTypes.STRING
        },
        proyek:{
            type: DataTypes.STRING
        },
        keterangan:{
            type: DataTypes.STRING
        },
        tgl:{ 
            allowNull: false,
            type: DataTypes.DATEONLY
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return barangMasuk;
}