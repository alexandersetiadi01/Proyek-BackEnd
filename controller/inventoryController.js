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

exports.seeAllGUDANGLENGKONG= async (req, res) => {
    const inventory = await db.inventoryGudangLengkong.findAll();
    res.json(inventory);
};

exports.seeAllGUDANGSERPONG = async (req, res) => {
    const inventory = await db.inventoryGudangSerpong.findAll();
    res.json(inventory);
};

exports.seeAllSERPONGLAGOONA16 = async (req, res) => {
    const inventory = await db.inventorySerpongLagoonA16.findAll();
    res.json(inventory);
};

exports.seeAllKANAPARKCLUSTERNOBU = async (req, res) => {
    const inventory = await db.inventoryKanaparkClusterNobu.findAll();
    res.json(inventory);
};

exports.seeAllGATECLUSTER = async (req, res) => {
    const inventory = await db.inventoryGateCluster.findAll();
    res.json(inventory);
};


exports.findInventoryGudangSerpong = async (req, res) =>{
    const found = await db.inventoryGudangSerpong.findByPk(req.query.namabarang);
    res.json(found);
}


exports.findInventoryKantorKelurahanCilenggang = async (req, res) =>{
    const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.query.namabarang);
    res.json(found);
}


exports.findInventoryVanyaParkClusterAzura = async (req, res) =>{
    const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.query.namabarang);
    res.json(found);
}


exports.findInventoryGudarngLengkong = async (req, res) =>{
    const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.query.namabarang);
    res.json(found);
}

exports.inventoryBarangMasuk = async (req, res) => {
    const data = req.body;
    
    for(let i = 0; i < data.length; i++){
        
        if(data[i].proyek === "VANYA PARK CLUSTER AZURA"){
            const found = await db.inventoryVanyaParkClusterAzura.findByPk(data[i].namabarang);
            if(found !== null){
                const update = await db.inventoryVanyaParkClusterAzura.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryVanyaParkClusterAzura.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "KANTOR KELURAHAN CILENGGANG"){
            const found = await db.inventoryKantorKelurahanCilenggang.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryKantorKelurahanCilenggang.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryKantorKelurahanCilenggang.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }  
        if(data[i].proyek === "KANAPARK CLUSTER NOBU"){
            const found = await db.inventoryKanaparkClusterNobu.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryKanaparkClusterNobu.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryKanaparkClusterNobu.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "GUDANG SERPONG"){
            const found = await db.inventoryGudangSerpong.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryGudangSerpong.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryGudangSerpong.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "GUDANG LENGKONG"){
            const found = await db.inventoryGudangLengkong.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryGudangLengkong.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryGudangLengkong.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "GATE CLUSTER"){
            const found = await db.inventoryGateCluster.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryGateCluster.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryGateCluster.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "SERPONG LAGOON A16"){
            const found = await db.inventorySerpongLagoonA16.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventorySerpongLagoonA16.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventorySerpongLagoonA16.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        } 
        
    }
    
    /*
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.body.namabarang);
        
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
    }*/

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


/*const found = await db.inventory.findOne({
            where: {
                namabarang: req.body.namabarang,
                proyek: req.body.proyek
            }
        });*/