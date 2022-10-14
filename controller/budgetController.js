const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const data = req.body;
    
    for(let i = 0; i < data.length; i++){
        const found = await db.budget.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek
            }
        })
        if(found !== null){
            const update = await db.budget.update(
                {
                    quantityRAP: found.quantity + parseFloat(data[i].quantity),
                    quantity: found.ordered + parseFloat(data[i].quantity)
                },
                {
                    where: {
                        namabarang: data[i].namabarang,
                        proyek: data[i].proyek
                    } 
                }
            )
            res.json(update);
        }
        if(found === null){
            const budget = await db.budget.create({
                namabarang: data[i].namabarang,
                quantityRAP: data[i].quantity,
                quantity: data[i].quantity,
                proyek: data[i].proyek,
                satuan: data[i].satuan
            });
        }
       
    }
    
};

exports.seeAll = async (req, res) => {
    try{
        // const budget = await db.budget.findAll({
        // order: [['tgl', 'DESC']]
        // });
        const budget = await db.budget.findAll()
        res.json(budget);
    }catch(e){
        console.error(e)
    }
};

exports.select = async(req, res) => {
    const data = req.body;
    for(let i = 0; i < data.length; i++){
        const found = await db.budget.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek
            }
        })
        res.json(found)
    }
};

exports.update = async(req, res) => {
    let data = req.body;
    try{
        for(let i = 0; i < data.length; i++){
            const found = await db.budget.findOne({
                where: {
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek
                }
            })
            //const currentQTY = found.quantityRAP - found.quantity
            if(found !== null){
                const update = await db.budget.update(
                    {
                        quantity: found.quantity - parseFloat(data[i].quantity),
                        totalQTY: found.totalQTY + parseFloat(data[i].quantity)
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            proyek: data[i].proyek
                        } 
                    }
                )
                //res.json(update);
            }
            // const check = await db.budget.findOne({
            //     where: {
            //         namabarang: data[i].namabarang,
            //         proyek: data[i].proyek
            //     }
            // })
            // if(check.outstanding === 0){
            //     const outstanding = await db.outstanding.destroy(
            //         {
            //             where:{
            //                 namabarang: data[i].namabarang,
            //                 proyek: data[i].proyek,
            //                 supplier: data[i].supplier
            //             }
            //         }
            //     )
            //     //res.json(outstanding);
            // }
            
        }
    }catch(e){
        console.error(e);
    }
    
}

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
