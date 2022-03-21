const db = require("../models");
const Op = db.Sequelize.Op;

exports.createBarangSisa = async (req, res) => {
    const barang = await db.barangSisa.create({
        namabarang: req.body.namabarang,
        kodePO: req.body.kodePO,
        namaPenerima: req.body.namaPenerima,
        quantity: req.body.quantity,  
        noSuratJalan:  req.body.noSuratJalan1 + req.body.noSuratJalan2,
        tgl: req.body.tgl,
        status: "sisa",
        lokasi: req.body.lokasi,
        proyek: req.body.proyek,
        keterangan: req.body.keterangan
    });
    res.json(barang)
};


exports.seeAllBarangSisa = async (req, res) => {
    const barangSisa = await db.barangSisa.findAll();

    res.json(barangSisa);
}