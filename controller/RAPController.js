const db = require("../models");
const Op = db.Sequelize.Op;


exports.createRAP = async (req, res) => {
    const data = req.body
    for(let i = 0; i < data.length; i++){
        const found = await db.outstanding.findOne({
            where: {
                namabarang: data[i].namabarang,
                proyek: data[i].proyek
            }
        })
        
        if(found === null){
            const rap = await db.RAP.create({
                namabarang: data[i].namabarang,
                harga: data[i].quantity,
                quantity: data[i].quantity,
                satuan: data[i].satuan,
                proyek: data[i].proyek,
                
            });
            res.json(rap)
        }
       
    }
    /*
    if(found !== null){
            const update = await db.RAP.update(
                {
                    quantity: found.quantity + parseFloat(data[i].quantity)
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
     */
    

    res.json(rap);
};

exports.seeAllRAP = async (req, res) => {
    const rap = await db.RAP.findAll();

    res.json(rap);
};

exports.findRAP = async (req, res) => {
    const rap = await db.RAP.findAll({
        where:{
            namabarang: req.body.namabarang
        }
    });

    res.json(rap);
};


exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
