const db = require("../models");
const Op = db.Sequelize.Op;

exports.createSupplier = async (req, res) => {
    const supplier = await db.supplier.create({
        namaSupplier: req.body.namaSupplier,
        Pic: req.body.Pic,
        tlp: req.body.tlp,
        code: req.body.code.toUpperCase()
    });

    res.json(supplier);
};

exports.seeAllSupplier = async (req, res) => {
    const purchase = await db.supplier.findAll();

    res.json(purchase);
};

exports.selectSupplier = async (req, res) => {
    const supplier = await db.supplier.findByPk(req.query.namaSupplier);
    res.json(supplier);
}

exports.update = async(req, res) => {
    const found = await db.supplier.findByPk(req.body.namaSupplier);

    if(found !== null){
        const update = await db.supplier.update({   
            Pic: req.body.Pic,
            code: req.body.code,
            tlp: req.body.tlp
        },
        {
            where: {
                namaSupplier: req.body.namaSupplier
            }
        })
        res.json(update);
    }
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
