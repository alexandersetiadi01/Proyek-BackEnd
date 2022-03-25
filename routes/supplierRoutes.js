module.exports = (express, app) => {
    const controller = require("../controller/supplierController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAllSupplier);
    router.get("/select", controller.selectSupplier);

    router.put("/", controller.update);

    router.post("/", controller.createSupplier);
  
    app.use("/api/supplier", router);
  };