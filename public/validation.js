const {form} = {
	form: document.querySelector("#form")
}

const name = form.elements["name"]
const position = form.elements["position"]
const hireDate = form.elements["hire_date"]
const btn = form.elements[3]

const validate = {
	a: false,
	p: false,
	hD: false
}

form.addEventListener("change", () => {
	
	name.addEventListener("change", () => {
		if(name.value !== "" && name.value !== null){
			console.log("hola")
			validate.a = true;
		} else {
			validate.a = false;
		}
	})

	position.addEventListener("change", () => {
		if(position.value !== "" && position.value !== null){
			console.log("mundo")
			validate.p = true;
		} else {
			validate.p = false;
		}
	})

	hireDate.addEventListener("change", () => {
		if(hireDate.value !== "" && hireDate.value !== null){
			console.log("cruel")
			validate.hD = true;
		} else {
			validate.hD = false;
		}
	})

	if(validate.a === true){
		if(validate.p === true){
			if(validate.hD === true){
				btn.removeAttribute("disabled")
			} else {
				btn.setAttribute("disabled", true)
			}
		} else {
			btn.setAttribute("disabled", true)
		}
	} else {
		btn.setAttribute("disabled", true)
	}


})
