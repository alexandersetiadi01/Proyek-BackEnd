module.exports = (sequelize, DataTypes) => {
    const outstanding = sequelize.define('outstanding',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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