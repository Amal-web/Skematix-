const express=require("express");
const morgan=require("morgan")

// MODULE IMPORTS
const userRoutes=require("./route/userRoutes")
const campusRoutes=require("./route/campusRoutes")
const buildingRoutes=require("./route/buildingRoutes")





const app=express()

// MORGAN MIDDLEWARE
app.use(morgan("dev"))
app.use(express.json())

app.use("/api/v1/",userRoutes)
app.use("/api/v1/campus/",campusRoutes)
app.use("/api/v1/buildings",buildingRoutes)



module.exports=app