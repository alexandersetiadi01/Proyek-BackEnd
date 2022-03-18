module.exports = (express, app) => {
    const controller = require("../controller/purchasingController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAllPurchasing);
  
    router.post("/", controller.createPurchasing);

    router.get("/getPO", controller.getPO);

    router.get("/KodePO", controller.getInfo);
  
    app.use("/api/purchasing", router);
  };