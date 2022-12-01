const db = require("../models");
const Op = db.Sequelize.Op;
const argon2 = require("argon2");

exports.findUser = async (req, res) => {
    const user = await db.users.findByPk(req.query.ID);

    if(user === null || await argon2.verify(user.password, req.query.password) === false){
      // Login failed.
      res.json(null);
    }else{
      res.json(user);
    }
};

exports.findAllUser = async (req, res) => {
  const user = await db.users.findAll();

  res.json(user);
}

exports.createUser = async (req, res) => {
    try{
        const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });
        const user = await db.users.create({
            ID: req.body.ID,
            username: req.body.username,
            password: hash,
            accountLevel: req.body.accountLevel
        })
        res.json(user)
    }catch(e){
        res.json(e)
    }
    

    res.json(user);
};

exports.updateUser = async(req, res) => {
    const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });
    const found = await db.users.findByPk(req.body.ID);
    
    if(found !== null){

        const update = await db.users.update(
            {   
                password: hash
            },
            {
                where: {
                    ID: req.body.ID,
                    //proyek: req.body.proyek
                }
            }
        )
        res.json(update);
    }else{
        return;
    }
}