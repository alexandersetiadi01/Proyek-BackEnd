const db = require("../models");
const Op = db.Sequelize.Op;

exports.createBarangMasuk = async (req, res) => {
    const barang = await db.barangMasuk.create({
        namabarang: req.body.namabarang,
        namaPenerima: req.body.namaPenerima,
        quantity: req.body.quantity,  
        noSuratJalan: req.body.noSuratJalan1 + req.body.noSuratJalan2,
        tgl: req.body.tgl,
        status: "masuk",
        lokasi: req.body.lokasi,
        proyek: req.body.proyek,
        keterangan: req.body.keterangan
    });
    res.json(barang)
};

exports.seeAllBarangMasuk = async (req, res) => {
    const barangMasuk = await db.barangMasuk.findAll();

    res.json(barangMasuk);
}

exports.getPO = async (req, res) => {
    const barang = await db.barangMasuk.findAll(
        {
            where: {
                namabarang: req.params.namabarang
            },
            //attributes: {include: ['kodePO', 'proyek']}
        }
    );

    res.json(barang);
}

exports.searchByName = async (req, res) => {

    const barangMasuk = await db.barangMasuk.findAll({
        where:{
            namabarang: {
                $in: req.body.namabarang
            }
    }});

    res.json(barangMasuk);
    console.log(res.json(barangMasuk));
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
