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
        keterangan: req.body.keterangan,
        satuan: req.body.satuan
    });
    res.json(barang)
    
};
/*
    namabarang: req.body.namabarang,
    quantity: req.body.quantity,  
    noSuratJalan: req.body.noSuratJalan1 + req.body.noSuratJalan2,
    satuan: req.body.satuan 
*//*
exports.findSuratJalan = async (req, res) => {
    const find  = await db.kodebarangmasuk.findByPk(req.query.noSuratJalan1 + req.query.noSuratJalan2);
    res.json(find)
}
exports.createBarangMasuk = async (req, res) => {
    
        const kodebarangmasuk = await db.kodebarangmasuk.create({
            namaPenerima: req.body.namaPenerima,
            noSuratJalan: req.body.noSuratJalan1 + req.body.noSuratJalan2,
            tgl: req.body.tgl,
            status: "masuk",
            lokasi: req.body.lokasi,
            proyek: req.body.proyek,
            keterangan: req.body.keterangan,
        });
        res.json(kodebarangmasuk)
    
}
*/
exports.masukbanyakBarang = async (req, res) => {
    const barang = await db.barangMasuk.bulkCreate(req.body);
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
