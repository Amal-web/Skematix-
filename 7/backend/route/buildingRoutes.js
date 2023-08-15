const express=require("express")

const router=express.Router()
const {buildingList,addBuilding,updateBuilding,deleteBuilding}=require("../controller/buildingController")

router.get("/",buildingList)
router.post("/add",addBuilding)
router.route("/:id").patch(updateBuilding).delete(deleteBuilding)

module.exports=router