module.exports = (express, app) => {
    const controller = require("../controller/activityController");
    const router = express.Router();
  
    router.get("/getActivity", controller.getActivity);
    router.get("/", controller.seeAll);
  
    router.post("/addActivity", controller.addActivity);

    //router.get("/search", controller.searchByName);
  
    app.use("/api/activity", router);
};