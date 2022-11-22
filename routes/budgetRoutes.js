module.exports = (express, app) => {
    const controller = require("../controller/budgetController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAll);
    router.get("/select", controller.select);

    router.put("/update", controller.update);
  
    router.post("/", controller.create);

    app.use("/api/outstanding", router);
  };