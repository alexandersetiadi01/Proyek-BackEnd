const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    
    const barang = await db.inventory.create({
        //kodebarang: req.body.kodebarang,
        namabarang: req.body.namabarang,
        proyek: req.body.proyek,
        quantity: req.body.quantity
    });
    res.json(barang)
};

exports.seeAll = async (req, res) => {
    const inventory = await db.inventory.findAll();

    res.json(inventory);
};

exports.findItem = async (req, res) => {
    /*const namabarang = JSON.stringify(req.body.namabarang)
    const proyek = JSON.stringify(req.body.proyek)
    const found = await db.inventory.findAll({
        where: {
            namabarang: namabarang,
            proyek: proyek
        }
    });
    if(found !== null) {
        return true
    }else{
        return false
    }*/
    /*const found = await db.inventory.findAll({ 
        where: { 
            namabarang: req.params.namabarang, proyek: req.params.proyek 
        } 
    }).then(found => res.json(found));*/
    const found = await db.inventory.findByPk(req.query.namabarang);
    res.json(found);
}


//testing (failed)
exports.inventoryBarangMasuk = async (req, res) => {
    const found = await db.inventory.findByPk(req.body.namabarang);
    /*const found = await db.inventory.findOne({
        where: {
            namabarang: req.body.namabarang,
            proyek: req.body.proyek
        }
    });*/
    if(found !== null){

        const update = await db.inventory.update(
            {   
                quantity: parseInt(req.body.quantity) + found.quantity
            },
            {
                where: {
                    namabarang: req.body.namabarang,
                    //proyek: req.body.proyek
                }
            }
        )
        res.json(update);
    }else{
        return;
    }
    
};

exports.inventoryBarangKeluar = async (req, res) => {
    const found = await db.inventory.findByPk(req.body.namabarang);
    
    if(found !== null){

        const update = await db.inventory.update(
            {   
                quantity: found.quantity - parseInt(req.body.quantity)
            },
            {
                where: {
                    namabarang: req.body.namabarang
                }
            }
        )
        res.json(update);
    }else{
        return;
    }
}

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
