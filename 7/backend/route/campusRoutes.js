const express=require("express")

const router=express.Router()

const {campusList,addCampus,updateCampus,deleteCampus}=require("../controller/campusController")

router.get("/",campusList)
router.post("/add",addCampus)
router.route("/:id").patch(updateCampus).delete(deleteCampus)

module.exports=router