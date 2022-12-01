module.exports = (sequelize, DataTypes) => {
    const codedetail = sequelize.define('codedetail',
    {
        idcodemaster:{
            type: DataTypes.STRING,
            // primaryKey: true,
            // autoIncrement: true
            allowNull: false
        },
        idcodedetail:{
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
    return codedetail;
}