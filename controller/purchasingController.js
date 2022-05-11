const db = require("../models");
const Op = db.Sequelize.Op;

exports.createPurchasing = async (req, res) => {
    const found = await db.PO.findByPk(req.body.kodePO);
    if(found === null){
        const PO = await db.PO.bulkCreate(req.body, {ignoreDuplicates: true})
        res.json(PO)
    }
    const purchase = await db.purchasing.bulkCreate(req.body);
    /*
    const purchase = await db.purchasing.create({
        namabarang: req.body.namabarang,
        kodePO: req.body.kodePO,
        harga: req.body.harga,
        quantity: req.body.quantity,  
        totalHarga: req.body.quantity * req.body.harga,
        tgl: req.body.tgl,
        supplier: req.body.supplier,
        proyek: req.body.proyek
    });*/

    res.json(purchase);
};

exports.seeAllPurchasing = async (req, res) => {
    try{
        const purchase = await db.purchasing.findAll({
        order: [['tgl', 'DESC']]
        });

        res.json(purchase);
    }catch(e){
        console.error(e)
    }
   
};

exports.getInfo = async (req, res) => {
    const found = await db.purchasing.findAll({
        where: {
            namabarang: req.body.namabarang,
            proyek: req.body.proyek,
            kodePO: req.body.kodePO
        }
    });
    if(found !== null){
        res.json(found);
    }
    
}

exports.getPO = async (req, res) => {
    const PO = await db.PO.findAll();

    res.json(PO);
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
