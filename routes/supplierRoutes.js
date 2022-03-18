module.exports = (express, app) => {
    const controller = require("../controller/supplierController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAllSupplier);
    router.get("/select", controller.selectSupplier);

    router.post("/", controller.createSupplier);
  
    app.use("/api/supplier", router);
  };