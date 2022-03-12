const db = require("../models");
const Op = db.Sequelize.Op;

exports.seeActvity = async (req, res) => {
 
    const act = await db.activity.findAll();

    res.json(act);
}

exports.getActivity = async (req, res) => {
    const action = await db.activity.findAll();

    res.json(action);
}


exports.addActivity = async (req, res) => {
    const barang = await activity.create({
        username: req.body.username,
        activity: req.body.activity,
        tgl: req.body.tgl,
        pryek: req.body.proyek
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