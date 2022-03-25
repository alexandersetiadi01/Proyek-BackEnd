module.exports = (express, app) => {
    const controller = require("../controller/assetController.js");
    const router = express.Router();
  
    router.post("/", controller.create);

    router.get("/", controller.seeAll);
    router.get("/find", controller.find);

    router.put("/update", controller.update);
  
    app.use("/api/asset", router);
  };