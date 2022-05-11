module.exports = (express, app) => {
    const controller = require("../controller/inventoryController.js");
    const router = express.Router();
  
    router.post("/", controller.create);

    router.put("/inventoryMasuk", controller.inventoryBarangMasuk);
    router.put("/inventoryKeluar", controller.inventoryBarangKeluar);

    router.get("/vanyaParkClusterAzura", controller.seeAllVANYAPARKCLUSTERAZURA);
    router.get("/kantorKeluarahanCilenggang", controller.seeAllKANTORKELURAHANCILENGGANG);
    router.get("/kanaparkClusterNobu", controller.seeAllKANAPARKCLUSTERNOBU);
    router.get("/gudangLengkong", controller.seeAllGUDANGLENGKONG);
    router.get("/gudangSerpong", controller.seeAllGUDANGSERPONG);
    router.get("/serpongLagoonA16", controller.seeAllSERPONGLAGOONA16);
    router.get("/gateCluster", controller.seeAllGATECLUSTER);
    router.get("/seeInventory", controller.seeAllInventory);

    router.get("/findVanyaParkClusterAzura", controller.findInventoryVanyaParkClusterAzura);
    router.get("/findKantorKelurahanCilenggang", controller.findInventoryKantorKelurahanCilenggang);
    router.get("/findGudangSerpong", controller.findInventoryGudangSerpong);
    router.get("/findGudangLengkong", controller.findInventoryGudarngLengkong);
    router.get("/findGateCluster", controller.findInventoryGateCluster);
    router.get("/findKanaparkClusterNobu", controller.findInventoryKanaparkClusterNobu);
    router.get("/findSerpongLagoonA16", controller.findInventoryserpongLagoonA16);
    
    app.use("/api/inventory", router);
  };