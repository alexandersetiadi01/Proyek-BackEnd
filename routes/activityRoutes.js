module.exports = (express, app) => {
    const controller = require("../controller/activityController");
    const router = express.Router();
  
    router.get("/getActivity", controller.getActivity);
    router.get("/", controller.seeAll);
  
    router.post("/addActivityMasuk", controller.addActivityMasuk);
    router.post("/addActivitySisa", controller.addActivitySisa);
    router.post("/addActivityKeluar", controller.addActivityKeluar);

    //router.get("/search", controller.searchByName);
  
    app.use("/api/activity", router);
};