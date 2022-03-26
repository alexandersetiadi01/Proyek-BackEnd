module.exports = (sequelize, DataTypes) => {
    const asset = sequelize.define('asset',
    {
        /*id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        asset:{ 
            type: DataTypes.STRING,
        },
        nomor:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
            
        },
        lokasi:{
            type: DataTypes.STRING,
            
        },
        entry:{
            type: DataTypes.DATEONLY,
            //allowNull: false
        },
        lokasi:{
            type: DataTypes.STRING
        },
        keterangan:{
            type: DataTypes.STRING
        }, 
        Pic:{
            type: DataTypes.STRING
        },
        proyek:{  //masuk ke proyek mana barangnya
            type: DataTypes.STRING,
            //allowNull: false
        }
        /*totalQTY: {
            type: DataTypes.INTEGER
        }*/
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return asset;
}