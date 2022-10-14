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
//db.purchasing = require("./purchasingModel")(sequelize, Sequelize);
db.activity = require("./acivityModel")(sequelize, Sequelize);
db.supplier = require("./supplierModel")(sequelize, Sequelize);
db.PO = require("./POmodel")(sequelize, Sequelize);
db.barangSisa = require("./barangSisaModel")(sequelize, Sequelize);
//db.outstanding = require("./outstandingModel")(sequelize, Sequelize);
db.asset = require("./assetModel")(sequelize, Sequelize);
db.Satuan = require("./satuanModel")(sequelize, Sequelize);
db.inventory = require("./inventoryModel")(sequelize, Sequelize);
db.RAP = require("./RAPModel")(sequelize, Sequelize);
db.budget = require("./budgetModel")(sequelize, Sequelize);

db.barangMasuk.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
db.barangMasuk.belongsTo(db.Satuan, {foreignKey: 'satuan', source: 'satuan'});

db.barangKeluar.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
db.barangKeluar.belongsTo(db.Satuan, {foreignKey: 'satuan', source: 'satuan'});

db.barangSisa.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});
db.barangSisa.belongsTo(db.Satuan, {foreignKey: 'satuan', source: 'satuan'});

//db.purchasing.belongsTo(db.PO, {foreignKey: "kodePO", source: "kodePO"});
//db.purchasing.belongsTo(db.masterBarang, {foreignKey: "namabarang", source: "namabarang"});

db.inventory.belongsTo(db.masterBarang, {foreignKey: "namabarang", source: "namabarang"});
db.inventory.belongsTo(db.Satuan, {foreignKey: "satuan", source: "satuan"});

db.RAP.belongsTo(db.masterBarang, {foreignKey: 'namabarang', source: 'namabarang'});

module.exports = db;
