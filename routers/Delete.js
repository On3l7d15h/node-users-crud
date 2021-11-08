const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees.js")

router.delete("/:id", async (req, res) => {
	const id = req.params.id;

	try
	{
		const DBdata = await Employees.findByIdAndDelete({_id: id});
		res.json({
			e: false,
			msg: "No hubo ningún Problema"
		})
	}
	catch(e){
		res.json({
			e: true,
			msg: "Hubo Un Error...."
		})
	}
})

module.exports = router