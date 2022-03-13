module.exports = (sequelize, DataTypes) => {
    const activity = sequelize.define("activity", 
    {
        username: { //kodemasuk atau kodekeluar
            type: DataTypes.STRING,
            allowNull: false
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tgl: { //tgl barang
            type: DataTypes.DATE
        },
        proyek: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
    })
    activity.removeAttribute('id');
    return activity;
}