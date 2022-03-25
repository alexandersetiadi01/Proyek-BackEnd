module.exports = (express, app) => {
    const controller = require("../controller/outstandingController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAll);
  
    router.post("/", controller.create);

    app.use("/api/outstanding", router);
  };