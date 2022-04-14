const db = require("../models");
const Op = db.Sequelize.Op;

exports.find = async (req, res) => {
    const proyek = await db.proyeks.findOne({
        where: {namaProyek: req.body.namaProyek}
    });

    res.json(proyek)
};

exports.seeAll = async (req, res) => {
    const satuan = await db.Satuan.findAll();

    res.json(satuan)
};

exports.createSatuan = async (req, res) => {
    const satuan = await db.Satuan.create({
        satuan: req.body.satuan
    });

    res.json(satuan);
};