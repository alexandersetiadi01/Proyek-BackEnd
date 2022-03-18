const db = require("../models");
const Op = db.Sequelize.Op;

exports.createPurchasing = async (req, res) => {
    const found = await db.PO.findByPk(req.body.kodePO);
    if(found === null){
        const PO = await db.PO.create({
            kodePO: req.body.kodePO,
            proyek: req.body.proyek
        })
    }
    const purchase = await db.purchasing.create({
        namabarang: req.body.namabarang,
        kodePO: req.body.kodePO,
        harga: req.body.harga,
        quantity: req.body.quantity,  
        totalHarga: req.body.quantity * req.body.harga,
        tgl: req.body.tgl,
        supplier: req.body.supplier,
        proyek: req.body.proyek
    });

    res.json(purchase);
};

exports.seeAllPurchasing = async (req, res) => {
    const purchase = await db.purchasing.findAll();

    res.json(purchase);
};

exports.getInfo = async (req, res) => {
    /*const namaBarang = req.body.namabarang;
    const purchase = await db.purchasing.findAll({
        where: {
            namabarang: namaBarang
        }
    })*/
    
    //res.json(purchase);
}

exports.getPO = async (req, res) => {
    const PO = await db.PO.findAll();

    res.json(PO);
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
