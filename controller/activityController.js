const db = require("../models");
const Op = db.Sequelize.Op;
const seq = require('sequelize')

exports.seeAll = async (req, res) => {
    const act = await db.activity.findAll();

    res.json(act)
}

exports.getActivity = async (req, res) => {
    const action = await seq.query('SELECT * FROM activity', {type: seq.QueryTypes.SELECT})

    res.json(action);
}

const datePickerIconst = new Date().toLocaleDateString();

exports.addActivityMasuk = async (req, res) => {
    const barang = await db.activity.create({
        username: req.body.username,
        action: "barang masuk",
        tgl: req.body.tgl,
        proyek: req.body.proyek
    });
    res.json(barang)
};


exports.addActivitySisa = async (req, res) => {
    const barang = await db.activity.create({
        username: req.body.username,
        action: "barang sisa",
        tgl: req.body.tgl,
        proyek: req.body.proyek
    });
    res.json(barang)
};


exports.addActivityKeluar = async (req, res) => {
    const barang = await db.activity.create({
        username: req.body.username,
        action: "barang keluar",
        tgl: req.body.tgl,
        proyek: req.body.proyek
    });
    res.json(barang)
};

exports.addActivityPurchasing = async (req, res) => {
    const barang = await db.activity.create({
        username: req.body.username,
        action: "Purchasing",
        tgl: req.body.tgl,
        proyek: req.body.proyek
    });
    res.json(barang)
};

exports.addActivityAsset = async (req, res) => {
    const barang = await db.activity.create({
        username: req.body.username,
        action: "Asset",
        tgl: req.body.entry,
        proyek: req.body.proyek
    });
    res.json(barang)
};

/*
exports.seeHistory = async (req, res) => {
    const history = await sequelize.query(
        'SELECT * FROM barangmasuk, barangkeluar', {type: QueryTypes.SELECT}
    );

    res.json(history)
}*/