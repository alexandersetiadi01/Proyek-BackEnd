module.exports = (express, app) => {
    const controller = require("../controller/RAPController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAllRAP);

    router.post("/", controller.createRAP);
  
    app.use("/api/RAP", router);
  };