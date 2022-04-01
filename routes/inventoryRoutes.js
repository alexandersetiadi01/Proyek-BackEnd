module.exports = (express, app) => {
    const controller = require("../controller/inventoryController.js");
    const router = express.Router();
  
    router.post("/", controller.create);

    router.put("/inventoryMasuk", controller.inventoryBarangMasuk);
    router.put("/inventoryKeluar", controller.inventoryBarangKeluar);

    router.get("/vanyaParkClusterAzura", controller.seeAllVANYAPARKCLUSTERAZURA);
    router.get("/kantorKeluarahanCilenggang", controller.seeAllKANTORKELURAHANCILENGGANG);
    router.get("/findVanyaParkClusterAzura", controller.findInventoryVanyaParkClusterAzura);
    router.get("/findKantorKelurahanCilenggang", controller.findInventoryKantorKelurahanCilenggang);
  
    app.use("/api/inventory", router);
  };