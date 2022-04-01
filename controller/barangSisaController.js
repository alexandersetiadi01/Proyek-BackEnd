const db = require("../models");
const Op = db.Sequelize.Op;

exports.createBarangSisa = async (req, res) => {
    const barang = await db.barangSisa.create({
        namabarang: req.body.namabarang,
        namaPenerima: req.body.namaPenerima,
        quantity: req.body.quantity,
        tgl: req.body.tgl,
        status: "sisa",
        lokasi: req.body.lokasi,
        proyek: req.body.proyek,
        keterangan: req.body.keterangan,
        satuan: req.body.satuan
    });
    res.json(barang)
};


exports.seeAllBarangSisa = async (req, res) => {
    const barangSisa = await db.barangSisa.findAll();

    res.json(barangSisa);
}