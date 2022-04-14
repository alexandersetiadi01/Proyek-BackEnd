module.exports = (sequelize, DataTypes) => {
    const kodebarangMasuk = sequelize.define('kodebarangmasuk',
    {
        namaPenerima:{
            type: DataTypes.STRING,
            allowNull: false
        },
        noSuratJalan:{
            type: DataTypes.STRING,
            primaryKey: true,
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
    return kodebarangMasuk;
}