module.exports = (sequelize, DataTypes) => {
    const outstanding = sequelize.define('outstanding',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        kodePO:{
            type: DataTypes.STRING
        },
        namabarang:{
            type: DataTypes.STRING
        },
        outstanding: {
            type: DataTypes.DOUBLE
        },
        ordered: {
            type: DataTypes.DOUBLE,
            //allowNull: false
        },
        keterangan:{
            type: DataTypes.STRING  
        },
        tgl:{
            type: DataTypes.DATEONLY
        },
        proyek:{
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return outstanding;
}