module.exports = (express, app) => {
    const controller = require("../controller/satuanController.js");
    const router = express.Router();

    router.get("/", controller.seeAll);
  
    router.post("/", controller.createSatuan);
  
    app.use("/api/satuan", router);
  };