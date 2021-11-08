//post method/s
const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees.js");

router.post("/", async (req, res) => {
	const body = req.body;

	try
	{
		await Employees.create(body);
		res.redirect("/")
	}
	catch(err){
		console.log(err)
	}
});

module.exports = router;