const db = require("../models");
const Op = db.Sequelize.Op;
const readXlsxFile = require("read-excel-file/node");

exports.create = async (req, res) => {

    const asset = await db.asset.create({
        //kodebarang: req.body.kodebarang,
        asset: req.body.asset,
        nomor: req.body.nomor, 
        entry: req.body.entry,
        proyek: req.body.proyek,
        lokasi: req.body.lokasi,
        keterangan: req.body.keterangan
    });
    res.json(asset)
};

exports.seeAll = async (req, res) => {
    const asset = await db.asset.findAll();

    res.json(asset);
};

exports.find = async (req, res) => {
    const asset = await db.asset.findByPk(req.query.nomor);
    res.json(asset);
}

exports.update = async (req, res) => {
    const found = await db.asset.findByPk(req.body.nomor);
    /*const found = await db.inventory.findOne({
        where: {
            namabarang: req.body.namabarang,
            proyek: req.body.proyek
        }
    });*/
    if(found !== null){

        const update = await db.asset.update(
            {   
                entry: req.body.entry,
                lokasi: req.body.lokasi,
                keterangan: req.body.keterangan
            },
            {
                where: {
                    nomor: req.body.nomor,
                    //proyek: req.body.proyek
                }
            }
        )
        res.json(update);
    }else{
        return;
    }
    
};
