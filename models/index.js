const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    //max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.masterBarang = require("./masterBarangModel")(sequelize, Sequelize);
db.barangKeluar = require("./barangKeluarModel")(sequelize, Sequelize);
db.barangMasuk = require("./barangMasukModel")(sequelize, Sequelize);
//db.history = require("./historyModel")(sequelize, Sequelize);
db.users = require("./user")(sequelize, Sequelize);
db.proyeks = require("./proyekModel")(sequelize, Sequelize);
db.purchasing = require("./purchasingModel")(sequelize, Sequelize);
db.activity = require("./acivityModel")(sequelize, Sequelize);
//db.inventory = require("./inventoryModel")(sequelize, Sequelize);
db.supplier = require("./supplierModel")(sequelize, Sequelize);
db.PO = require("./POmodel")(sequelize, Sequelize);
db.barangSisa = require("./barangSisaModel")(sequelize, Sequelize);
db.outstanding = require("./outstandingModel")(sequelize, Sequelize);
db.asset = require("./assetModel")(sequelize, Sequelize);
db.Satuan = require("./satuanModel")(sequelize, Sequelize);
db.inventoryVanyaParkClusterAzura = require("./inventoryVanyaParkClusterAzureModel")(sequelize, Sequelize);
db.inventoryKantorKelurahanCilenggang = require("./inventoryKantorKelurahanCilenggangModel")(sequelize, Sequelize);

//db.kodebarangmasuk = require("./kodeBarangMasukModel")(sequelize, Sequelize);
//db.barangMasuk.belongsTo(db.kodebarangmasuk, {foreignKey: 'noSuratJalan', source:"noSuratJalan"})

db.barangMasuk.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
db.barangMasuk.belongsTo(db.Satuan, {foreignKey: 'satuan', source: 'satuan'});
//db.barangMasuk.belongsTo(db.proyeks, {foreignKey: 'namaProyek', source: 'proyek'});

db.barangKeluar.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
db.barangSisa.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
//db.purchasing.belongsTo(db.barangMasuk, {foreignKey: "kodePO", source: "kodePO"});
db.purchasing.belongsTo(db.PO, {foreignKey: "kodePO", source: "kodePO"});
db.purchasing.belongsTo(db.PO, {foreignKey: "namabarang", source: "namabarang"});

//db.inventoryKantorKelurahanCilenggang.belongsTo(db.proyeks, {foreignKey: 'proyek', source: 'namaProyek'});
//db.inventoryVanyaParkClusterAzura.belongsTo(db.proyeks, {foreignKey: 'proyek', source: 'namaProyek'});

module.exports = db;