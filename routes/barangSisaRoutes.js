module.exports = (express, app) => {
    const controller = require("../controller/barangSisaController.js");
    const router = express.Router();

    router.get("/listBarangSisa", controller.seeAllBarangSisa);

    router.post("/addBarangSisa", controller.createBarangSisa);


  //  router.get("/Search", controller.searchByName);
  
    app.use("/api/barangSisa", router);
};