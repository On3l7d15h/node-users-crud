const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees.js");

router.get("/", async (req, res) => { 
	
	try
	{
		const dataDB = await Employees.find()
		res.render("index", {data: dataDB})
	}	
	catch(e){
		console.log(e)
	}
})

router.get("/create", (req, res) => {
	res.render("create")
})

//conseguir ver usuarios por id encriptado!

router.get("/:id", async (req, res) => {

	const id = req.params.id;

	try
	{
		const dataDB = await Employees.findOne({_id: id});
		//preguntemos
		if(dataDB){
			res.render("info", {data: dataDB})
		}
	}
	catch(err){
		console.log(err)
	}

});

module.exports = router;
