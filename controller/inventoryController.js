const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const barang = await db.inventoryVanyaParkClusterAzura.create({
            //kodebarang: req.body.kodebarang,
            namabarang: req.body.namabarang,
            proyek: req.body.proyek,
            quantity: req.body.quantity,
            satuan: req.body.satuan
        })
        res.json(barang)
    }
    if(req.body.proyek === "KANTOR KELURAHAN CILENGGANG"){
        const barang = await db.inventoryKantorKelurahanCilenggang.create({
            //kodebarang: req.body.kodebarang,
            namabarang: req.body.namabarang,
            proyek: req.body.proyek,
            quantity: req.body.quantity,
            satuan: req.body.satuan
        })
        res.json(barang)
    }

    
};

exports.seeAllVANYAPARKCLUSTERAZURA = async (req, res) => {
    const inventory = await db.inventoryVanyaParkClusterAzura.findAll();
    res.json(inventory);
};


exports.seeAllKANTORKELURAHANCILENGGANG = async (req, res) => {
    const inventory = await db.inventoryKantorKelurahanCilenggang.findAll();
    res.json(inventory);
};

exports.findItem = async (req, res) => {
    /*const namabarang = JSON.stringify(req.body.namabarang)
    const proyek = JSON.stringify(req.body.proyek)
    const found = await db.inventory.findAll({
        where: {
            namabarang: namabarang,
            proyek: proyek
        }
    });
    if(found !== null) {
        return true
    }else{
        return false
    }*/
    /*const found = await db.inventory.findAll({ 
        where: { 
            namabarang: req.params.namabarang, proyek: req.params.proyek 
        } 
    }).then(found => res.json(found));*/
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.body.namabarang);
        res.json(found);
    }
    if(req.body.proyek === "KANTOR KELURAHAN CILENGGANG"){
        const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.query.namabarang);
        res.json(found);
    }
   
}

exports.findInventoryVanyaParkClusterAzura = async (req, res) =>{
    const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.query.namabarang);
    res.json(found);
}


exports.findInventoryKantorKelurahanCilenggang = async (req, res) =>{
    const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.query.namabarang);
    res.json(found);
}

//testing (failed)
exports.inventoryBarangMasuk = async (req, res) => {
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.body.namabarang);
        /*const found = await db.inventory.findOne({
            where: {
                namabarang: req.body.namabarang,
                proyek: req.body.proyek
            }
        });*/
        if(found !== null){
    
            const update = await db.inventoryVanyaParkClusterAzura.update(
                {   
                    quantity: parseFloat(req.body.quantity) + found.quantity
                },
                {
                    where: {
                        namabarang: req.body.namabarang,
                        //proyek: req.body.proyek
                    }
                }
            )
            res.json(update);
        }else{
            const barang = await db.inventoryVanyaParkClusterAzura.create({
                //kodebarang: req.body.kodebarang,
                namabarang: req.body.namabarang,
                proyek: req.body.proyek,
                quantity: req.body.quantity,
                satuan: req.body.satuan
            })
            res.json(barang)
        }
    }
    if(req.body.proyek === "KANTOR KELURAHAN CILENGGANG"){
        const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.body.namabarang);
        if(found !== null){
    
            const update = await db.inventoryKantorKelurahanCilenggang.update(
                {   
                    quantity: parseFloat(req.body.quantity) + found.quantity
                },
                {
                    where: {
                        namabarang: req.body.namabarang,
                        //proyek: req.body.proyek
                    }
                }
            )
            res.json(update);
        }else{
            const barang = await db.inventoryKantorKelurahanCilenggang.create({
                //kodebarang: req.body.kodebarang,
                namabarang: req.body.namabarang,
                proyek: req.body.proyek,
                quantity: req.body.quantity,
                satuan: req.body.satuan
            })
            res.json(barang)
        }
    }
};

exports.inventoryBarangKeluar = async (req, res) => {
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.body.namabarang);
        /*const found = await db.inventory.findOne({
            where: {
                namabarang: req.body.namabarang,
                proyek: req.body.proyek
            }
        });*/
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryVanyaParkClusterAzura.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "KANTOR KELURAHAN CILENGGANG"){
        const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.body.namabarang);
            /*const found = await db.inventory.findOne({
                where: {
                    namabarang: req.body.namabarang,
                    proyek: req.body.proyek
                }
            });*/
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryKantorKelurahanCilenggang.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } 
        }else{
            return null;
        }
    }else{
        return null;
    }
};
/*
    const found = await db.inventory.findByPk(req.body.namabarang);
    
    if(found !== null){

        const update = await db.inventory.update(
            {   
                quantity: found.quantity - parseInt(req.body.quantity)
            },
            {
                where: {
                    namabarang: req.body.namabarang
                }
            }
        )
        res.json(update);
    }else{
        return;
    }
}*/

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
