const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
	name: String,
	position: String,
	hire_date: Date
})

const Employees = mongoose.model("employees", employeesSchema);

module.exports = Employees;