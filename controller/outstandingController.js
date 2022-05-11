const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const data = req.body;
    
    for(let i = 0; i < data.length; i++){
        const found = await db.outstanding.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek, 
                supplier: data[i].supplier
            }
        })
        if(found !== null){
            const update = await db.outstanding.update(
                {
                    outstanding: found.outstanding + parseFloat(data[i].quantity),
                    ordered: found.ordered + parseFloat(data[i].quantity),
                    tgl: data[i].tgl
                },
                {
                    where: {
                        namabarang: data[i].namabarang,
                        proyek: data[i].proyek,
                        supplier: data[i].supplier
                    } 
                }
            )
            res.json(update);
        }
        if(found === null){
            const outstanding = await db.outstanding.create({
                namabarang: data[i].namabarang,
                outstanding: data[i].quantity,
                ordered: data[i].quantity,
                proyek: data[i].proyek,
                supplier: data[i].supplier,
                tgl: data[i].tgl,
                satuan: data[i].satuan
                //keterangan: req.body.keterangan
            });
            
        }
       
    }
    
};

exports.seeAll = async (req, res) => {
    const outstanding = await db.outstanding.findAll();

    res.json(outstanding);
};

exports.select = async(req, res) => {
    const data = req.body;
    for(let i = 0; i < data.length; i++){
        const found = await db.outstanding.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek,
                supplier: data[i].supplier
            }
        })
        // if(found !== null && found.outstanding >= data[i].quantity){
        //     res.json(found)
        // }
        res.json(found)
    }
/*
    if(found !== null){
        res.json(true)
         
        //testing
        const update = await db.supplier.update({   
            namabarang: data[i].namabarang,
            outstanding: data[i].quantity,
            ordered: data[i].quantity,
            proyek: data[i].proyek,
            kodePO: data[i].kodePO,
            tgl: data[i].tgl
        },
        {
            where: {
                kodePO: found.kodePO
            }
        })
        res.json(update);
    }else{
        res.json(false)
    } */
};

exports.update = async(req, res) => {
    let data = req.body;
    for(let i = 0; i < data.length; i++){
        const found = await db.outstanding.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek,
                supplier: data[i].supplier
            }
        })
        if(found !== null && found.outstanding >= data[i].quantity){
            const update = await db.outstanding.update(
                {
                    outstanding: found.outstanding - parseFloat(data[i].quantity)
                },
                {
                    where: {
                        namabarang: data[i].namabarang,
                        proyek: data[i].proyek,
                        supplier: data[i].supplier
                    } 
                }
            )
            res.json(update);
        }
        const check = await db.outstanding.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek,
                supplier: data[i].supplier
            }
        })
        if(check.outstanding === 0){
            const outstanding = await db.outstanding.destroy(
                {
                    where:{
                        namabarang: data[i].namabarang,
                        proyek: data[i].proyek,
                        supplier: data[i].supplier
                    }
                }
            )
            //res.json(outstanding);
        }
        
    }
}

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
