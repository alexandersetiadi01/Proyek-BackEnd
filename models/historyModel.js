module.exports = (sequelize, DataTypes) => {
    const history = sequelize.define('history',
    {
        proyek: {
            type: DataTypes.STRING
        },
        namabarang:{ 
            type: DataTypes.STRING,
        },
        quantity:{
            type: DataTypes.INTEGER,
        },
        satuan:{
            type: DataTypes.STRING,
        },
        tgl:{ 
            type: DataTypes.DATEONLY
        }, 
        status:{
            type: DataTypes.STRING
        },
        lokasi:{
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
    });
    history.removeAttribute('id');
    return history;
}