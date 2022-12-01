module.exports = (sequelize, DataTypes) => {
    const codemaster = sequelize.define('codemaster',
    {
        idcodemaster:{
            type: DataTypes.STRING,
            primaryKey: true,
            // autoIncrement: true
        },
        deskripsi:{
            type: DataTypes.STRING,
            allowNull: false,
            //primaryKey: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
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
    return codemaster;
}