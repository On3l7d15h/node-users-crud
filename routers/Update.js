const express = require("express");
const router = express.Router();
const Employees = require("../models/Employees.js");

router.put("/:id", async (req, res) => {
	const body = req.body;
	const id = req.params.id;

	try
	{
		const data = await Employees.findByIdAndUpdate(id, body, { useFindAndModify: false});
		if(data)
		{
			res.json({
				status: false,
				msg: "Actualizado con Éxito!"
			})
		}
		else
		{
			res.json({
				status: true,
				msg: "Oops! Hubo un error!"
			})
		}
	}
	catch(err)
	{
		console.log(err)
	}
})

module.exports = router;