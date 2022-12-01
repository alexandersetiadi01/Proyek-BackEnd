module.exports = (express, app) => {
    const controller = require("../controller/inventoryController.js");
    const router = express.Router();
  
    router.post("/", controller.create);

    router.post("/inventoryMasuk", controller.inventoryBarangMasuk);
    router.post("/inventoryKeluar", controller.inventoryBarangKeluar);

    router.post("/seeInventory", controller.seeAllInventory);
    router.post("/find", controller.findInventory);

    app.use("/api/inventory", router);
  };