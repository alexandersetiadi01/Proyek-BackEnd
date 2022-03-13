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


exports.addActivity = async (req, res) => {
    const barang = await activity.create({
        username: req.body.username,
        activity: req.body.activity,
        tgl: req.body.tgl,
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