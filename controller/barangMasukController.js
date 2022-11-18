const db = require("../models");
const Op = db.Sequelize.Op;

exports.createBarangMasuk = async (req, res) => {
    const barang = await db.barangMasuk.create({
        namabarang: req.body.namabarang,
        namaPenerima: req.body.namaPenerima,
        quantity: req.body.quantity,  
        // noSuratJalan: req.body.noSuratJalan1 + req.body.noSuratJalan2,
        noSuratJalan: req.body.noSuratJalan,
        tgl: req.body.tgl,
        status: "masuk",
        lokasi: req.body.lokasi,
        proyek: req.body.proyek,
        keterangan: req.body.keterangan,
        satuan: req.body.satuan,
        // kodePO: ""
    });
    res.json(barang)
    
};
exports.masukbanyakBarang = async (req, res) => {
    try{
        const barang = await db.barangMasuk.bulkCreate(req.body);
        res.json(barang)
    } catch (e) {
        res.json(e);
    }
    
};

exports.seeAllBarangMasuk = async (req, res) => {
    try{
        const barangMasuk = await db.barangMasuk.findAll({
            where:{
                proyek: req.body.proyek
            },
            order: [['tgl', 'DESC']]
        });

        res.json(barangMasuk);
    }catch(e){
        console.error(e)
    }
}

exports.getNamaBarangMasuk = async (req, res) => {
    try{
        const barangMasuk = await db.barangMasuk.findAll({
            attributes: ['namabarang'],
            where:{
                proyek: req.body.proyek
            },
            // order: [['tgl', 'DESC']]
        });

        res.json(barangMasuk);
    }catch(e){
        console.error(e)
    }
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
